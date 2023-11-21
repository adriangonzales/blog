---
title: "HighLevel: Decrypting SSO sessions with PHP | Adrian Gonzales"
description: "Using PHP to decrypt the HighLevel SSO payload"
headline: "HighLevel: Decrypting SSO sessions with PHP"
excerpt: "Using PHP to decrypt the HighLevel SSO payload"
date: "2023-11-21T12:00:00"
dateUpdated: ""
author: "Adrian Gonzales"
authorUrl: "https://virexmachina.com/"
---

I'm working on an extensive custom integration with [HighLevel](https://www.gohighlevel.com/), now possible because they recently built a single-sign-on process that allows web applications embedded in iFrames to validate that they are being loaded within the HL interface, as well as retrieve information about the current user and account viewing the application.

### The Challenge

This process is an interesting challenge due to security concerns and cross-domain resources loaded in iFrames.

The official documentation around this feature is very limited, mostly [this example implementation](https://github.com/GoHighLevel/ghl-marketplace-app-template#sso). Thankfully, talented people are sharing their knowledge, like [Sergio Leon's video explaining the SSO process](https://www.youtube.com/watch?v=3rveQDuVlR0) and [Sean Kerr's blog post adapting the process to Python](https://seankerr.dev/posts/decrypting-highlevel-sso-session-using-python/). The obvious challenge was implementing the decryption logic in PHP.

HighLevel uses [CryptoJS](https://github.com/brix/crypto-js) to encode the SSO payload. Unfortunately, as Sean found out, CryptoJS's default implementation does not use a standard approach to encryption.

> The crux of the problem is two parts:
>
> - CryptoJS is using the same prefix as OpenSSL when encrypting AES data.
> - It’s using MD5 instead of SHA256 as a hashing mechanism, and it only does a single iteration instead of thousands (more secure).

Sean's post showed me why neither [Laravel's Encryption service](https://laravel.com/docs/10.x/encryption) nor a basic [OpenSSL decrypt](https://www.php.net/manual/en/function.openssl-decrypt.php) implementation were working. After some rounds of interpreting their Python example to PHP, I ended up back at Google assuming someone somewhere had run into this problem before.

As usual, StackOverflow came to the rescue, with a question aptly titled [Decrypt Crypto-js encrypted text with key with PHP](https://stackoverflow.com/a/65235352). The answer's code showed PHP's `hash_init`, `hash_update`, and `hash_final` methods matched the `hasher` update and digest functionality in Python.

### Code

Here's the functionality, cleaned up a little and implemented as a class. I avoided using parameter and return types for increased compatibility.

```php
/**
 * CryptoJS compatibility module
 */
class CryptoJs
{
    /**
     * Decrypt a payload encrypted with a passphrase
     *
     * @see https://stackoverflow.com/a/65235352
     *
     * @param string $payload
     * @param string $passphrase
     * @return string
     */
    public static function decrypt($payload, $passphrase)
    {
        $ciphertext = base64_decode($payload);

        if (substr($ciphertext, 0, 8) != "Salted__") {
            return false;
        }

        $salt = substr($ciphertext, 8, 8);

        $keyAndIV = self::deriveKeyAndIv($passphrase, $salt);

        return openssl_decrypt(
            substr($ciphertext, 16),
            "aes-256-cbc",
            $keyAndIV["key"],
            OPENSSL_RAW_DATA, // base64 was already decoded
            $keyAndIV["iv"]
        );
    }

    /**
     * Derive key from the given passphrase and salt.
     *
     * @param string $passphrase
     * @param string $salt
     * @param integer $keySize
     * @param integer $ivSize
     * @param integer $iterations
     * @param string $hashAlgorithm
     * @return void
     */
    private static function deriveKeyAndIv($passphrase, $salt, $keySize = 8, $ivSize = 4, $iterations = 1, $hashAlgorithm = "md5")
    {
        $targetKeySize = $keySize + $ivSize;
        $derivedBytes = "";
        $numberOfDerivedWords = 0;
        $block = NULL;
        $hasher = hash_init($hashAlgorithm);

        while ($numberOfDerivedWords < $targetKeySize) {
            if ($block != NULL) {
                hash_update($hasher, $block);
            }

            hash_update($hasher, $passphrase);
            hash_update($hasher, $salt);
            $block = hash_final($hasher, TRUE);
            $hasher = hash_init($hashAlgorithm);

            // Iterations
            for ($i = 1; $i < $iterations; $i++) {
                hash_update($hasher, $block);
                $block = hash_final($hasher, TRUE);
                $hasher = hash_init($hashAlgorithm);
            }

            $derivedBytes .= substr($block, 0, min(strlen($block), ($targetKeySize - $numberOfDerivedWords) * 4));
            $numberOfDerivedWords += strlen($block) / 4;
        }

        return array(
            "key" => substr($derivedBytes, 0, $keySize * 4),
            "iv"  => substr($derivedBytes, $keySize * 4, $ivSize * 4)
        );
    }
}
```

This class can be used to decrypt the SSO payload like this:

```php
$data = CryptoJs::decrypt($ssoPayload, $ssoPassphrase);
```

Good luck on your implementation!
