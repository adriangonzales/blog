---
title: "HighLevel: Utilizing SSO sessions from inside Custom Menu Links | Adrian Gonzales"
headline: "HighLevel: Utilizing SSO sessions from inside Custom Menu Links"
description: "You can use SSO sessions from inside Custom Menu Links, not just custom pages"
excerpt: "You can use SSO sessions from inside Custom Menu Links, not just custom pages"
date: "2023-11-22T12:00:00"
dateUpdated: ""
author: "Adrian Gonzales"
authorUrl: "https://virexmachina.com/"
---

I'm working on an extensive custom integration with [HighLevel](https://www.gohighlevel.com/), now possible because they recently built a single-sign-on process that allows web applications embedded in iFrames to validate that they are being loaded within the HL interface, as well as retrieve information about the current user and account viewing the application.

Unfortunately, the SSO functionality is currently only available on a secondary tab of the App. In addition, there can only be one Custom Page. This seems useful for a settings page, but there is so much more potential here.

Using some custom JavaScript, you can recreate the SSO functionality from any Custom Menu Link. If you haven't already learned how to implement this from inside the iFrame, I suggest you head over to [Sergio Leon's video explaining the SSO process](https://www.youtube.com/watch?v=3rveQDuVlR0).

## Setup

To start this, you will need an Application set up and installed, and an SSO Key generated for it.

You will need to know the Application ID and Location ID. You can insert the location ID into the link dynamically. From the tooltip on the Menu Link edit screen:

> You may use Location values and Custom Values in here. (These will only work on the Location side bar, when inside an account) Example: http://url.com/{{location.id}}?value={{custom_values.my_value}}

## Custom Link SSO Implementation

In your Settings > Company page, there is a Custom Javascript box. This code will go in that box.

### Event Listener

We need to re-create the event listener that GHL provides on the Application Custom Page tab. This is a standard [event listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) attatched to the window. This listens for a `message` event and executes the code. It is important that we set up an `async` function, since this will handle [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). We're using [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#:~:text=Unpacking%20properties%20from%20objects%20passed%20as%20a%20function%20parameter) to pull just the `data` object out of the event.

```js
window.addEventListener("message", async function({ data }){ ... });
```

Since the `message` event is used by many functions, you want to make sure this is the event we're looking for. The name used by the official GHL implementation is `REQUEST_USER_DATA`. If you change this, it needs to match on both the custom listener and the app loaded inside the iFrame.

```js
if (data.message === "REQUEST_USER_DATA") {
  //...
}
```

### Authenticated API requests

We'll need to be able to make an authenticated request for the session details. All API requests from the browser require these headers:

```js
const requestHeaders = new Headers();
requestHeaders.append("source", "WEB_USER");
requestHeaders.append("version", "2021-07-28");
requestHeaders.append("accept", "application/json, text/plain, */*");
requestHeaders.append("channel", "APP");
```

Then this header is what provides the current user's token. `window.getToken()` is provided by the primary GHL application.

```js
requestHeaders.append("token-id", await window.getToken());
```

For this SSO request, you'll also need to provide the location ID in a header.

```js
requestHeaders.append("location", locationId);
```

### Retrieving Session Details

We can get the details by making a request to the `session-details` endpoint with those headers and the App ID.

```js
const sessionDetailsResponse = fetch(`https://services.leadconnectorhq.com/oauth/sso/${appId}/session-details`, {
  method: "GET",
  headers: requestHeaders,
});
```

Get the JSON payload from request

```js
const sessionDetails = await sessionDetailsResponse.json();
```

### Response Event

Now that we have the encrypted session data, when we want to reply to the iFrame. We'll need to have a target DOM element to send the message to. In this case, its the iFrame inside the `.custom-link` container.

```js
const frame = document.querySelector(".custom-link iframe");
```

We're looking for the [contentWindow](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow) property of the iFrame. This gives us the `window` object inside the iFrame. Now we can post a message _inside_ the iFrame with the session details. The official implementation uses the message name `REQUEST_USER_DATA_RESPONSE`, again if you change that here, you must change it on the app loaded inside the iFrame.

```js
frame.contentWindow.postMessage(
  {
    message: "REQUEST_USER_DATA_RESPONSE",
    payload: sessionDetails.data,
  },
  "*"
);
```

## Custom Menu Link Implementation

Now your app needs to do the same request dance as the Custom Page. You can view that process [here](https://github.com/cbnsndwch/ghl-app-template#sso-iframe-integration). Remember if you have changed the `REQUEST_USER_DATA` or `REQUEST_USER_DATA_RESPONSE` message names here, they need to be changed in your app implementation too.

## The Code

Here's the full code

```js
const appId = "123";
const locationId = "abc";

window.addEventListener("message", async ({ data }) => {
  // Make sure this is a request for user data
  if (data.message === "REQUEST_USER_DATA") {
    // Build request headers
    const requestHeaders = new Headers();
    requestHeaders.append("source", "WEB_USER");
    requestHeaders.append("version", "2021-07-28");
    requestHeaders.append("accept", "application/json, text/plain, */*");
    requestHeaders.append("channel", "APP");
    requestHeaders.append("location", locationId);
    requestHeaders.append("token-id", await window.getToken());

    // Request session key from GHL endpoint
    const sessionDetailsResponse = await fetch(`https://services.leadconnectorhq.com/oauth/sso/${appId}/session-details`, {
      method: "GET",
      headers: requestHeaders,
    });

    // Get JSON payload from request
    const sessionDetails = await sessionDetailsResponse.json();

    // Find the iFrame
    const frame = document.querySelector(".custom-link iframe");

    // Respond to iFrame with data
    frame.querySelector(".custom-link iframe").contentWindow.postMessage(
      {
        message: "REQUEST_USER_DATA_RESPONSE",
        payload: sessionDetails.data,
      },
      "*"
    );
  }
});
```
