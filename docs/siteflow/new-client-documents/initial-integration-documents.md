## Documentation
* https://hpsiteflow.com/docs/siteflow/about.html
---
## Roadmap
1. Read through the documentation at https://hpsiteflow.com/docs/siteflow/about.html and note the gotchas below.
2. Determine which shipping carriers/methods will be used and provide any of the relevant details.
3. Get the order item structure from us for each of the products we will be fulfilling.
4. Get SiteFlow authentication working.
4. Using a predetermined testing shipping method, get the order structure correct by using the validate API call (https://hpsiteflow.com/docs/api-reference/siteflow-pro.html#/Order/post_order_validate).
5. Submit test orders into production to be printed and shipped. Confirm printing and shipping were correctly performed.
6. Set up an endpoint to receive JSON callbacks for various events from SiteFlow. The most commonly used events are "Order Received", "Order Errored", "Order Cancelled", and "Shipment Shipped". For each event, let us know the URL, HTTP method, JSON format, and credentials (if any) to use. Stick to basic authentication. SiteFlow does not support OAuth.
7. Submit more test orders into production to be printed and shipped and confirm that callbacks are working.
8. Go live.
---
## Gotchas/Points of Confusion
1. There are 2 different endpoints to which requests should be sent:
   * For submitting orders into production, use https://orders.oneflow.io/api
     as the base. In other words, POSTing to
     https://orders.oneflow.io/api/order for creating a production order would
     be the only time this is used.
   * All other requests should use https://pro-api.oneflowcloud.com/api as the
     base. This would be used for for cancelling orders, getting order
     statuses, updating shipping details, testing potential order data with a
     POST to /order/validate, etc.
2. There is little useful immediate feedback from POSTing to https://orders.oneflow.io/api/order to create a production order. Any non-authentication error arising from the production order creation API call is only available through the SiteFlow UI or through an "Order Errored" postback configured in SiteFlow, beforehand.
3. Once an order is placed into production, no editing of the order details is possible beyond shipping details and methods, adding/removing order tags, and cancellation.
4. There is no true test environment. Any orders submitted into production for test purposes, and not intended for fulfillment, must be cancelled before being printed. Order data can be validated to a limited extent by POSTing it to https://pro-api.oneflowcloud.com/api/order/validate. Again, the validation is limited, there may be certain aspects of some order item products that the validate call does not handle correctly.
