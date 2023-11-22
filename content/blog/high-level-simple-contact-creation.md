---
title: "HighLevel: Simple contact creation with a POST operation | Adrian Gonzales"
headline: "HighLevel: Simple Contact creation a POST operation"
description: "Creating contacts in HighLevel using the Zapier API"
excerpt: "Creating contacts in HighLevel using the Zapier API"
date: "2023-11-22T12:00:00"
dateUpdated: ""
author: "Adrian Gonzales"
authorUrl: "https://virexmachina.com/"
---

HighLevel has an [API](https://highlevel.stoplight.io/docs/integrations/0443d7d1a4bd0-overview) with lots of features for integration with your applications and processes. But sometimes you just need to add a Contact from an application, like a Web Form.

HighLevel provides a [Zapier integration](https://help.gohighlevel.com/support/solutions/folders/48000666021) that can fit a lot of needs. If your requirements push you towards a custom integration, thankfully you can use the same endpoint for your needs as well.

<div class="note-block">
Note: this only works with Sub Accounts. Agencies need to use the full API.
</div>

## Create Key

Your API key can be found and/or regenerated in the Location view at Settings > Business Profile > General Information section. At the bottom there's a section labeled <em>API Key</em>.

<div class="note-block">
Note: Regenerating the API key (clicking the refresh icon) will invalidate any existing integration using the key.
</div>

## Perform POST request

To create a new contact, perform a POST request to this URL:

`https://api.gohighlevel.com/zapier/contact/add_update/`

You need headers determining the content type, and the authorization Bearer Token.

This should be the key you generated in the UI, prefixed with `Bearer `, space included.

```yaml
Authorization: "Bearer apiKey123"
Content-Type: "application/json"
```

With a JSON body with these parameters:

```json
{
  "first_name": "Some First Name",
  "last_name": "Some Last Name",
  "email": "name@example.com",
  "phone": "+112355500000",
  "source": "Your App Name",
  "tags": "tag1,tag2,tag3",
  "lead": true
}
```
