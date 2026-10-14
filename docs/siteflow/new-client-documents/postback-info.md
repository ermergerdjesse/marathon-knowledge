# POSTback info
We can POST or PUT whichever is easiest for you. If you have an endpoint setup, please send over the address. If it requires authentication, please send that over too.
Just a standard URL to post info to, i.e. "https://order-api.joeschmoe.com/fulfillment/order/shipment?partner=marathon"
We can postback the following information;
  
```json
  Order Received
      {
          "TimeStamp":"{{timestamp}}",
          "SourceOrderId":"{{data.orderData.sourceOrderId}}",
          "OrderStatus":"received"
      }
 
  Order Cancelled
      {
          "TimeStamp":"{{timestamp}}",
          "SourceOrderId":"{{data.orderData.sourceOrderId}}",
          "OrderStatus":"cancelled"
      }

  Order Submission Error - If you would like, this shows any order sent to us incorrectly, whether it's missing a SKU name, shipping alias, or anything that is broken
      {
          "TimeStamp": "{{timestamp}}",
          "OrderID": "{{data.bodyJson.orderData.sourceOrderId}}",
          "ErrorsClean": [{{#each data.errorList}} "{{#if name}}{{ name }}: {{/if}}{{#if message}}{{ message }}{{else}}Unknown error{{/if}}{{#if path}} - At path {{path}}{{/if}}" {{/each}}],
          "Status": "Submission Error"
      }
  ^ It will say something similar to "ValidationFailed: Error processing component attributes for 'orderData.items[0].components[0].attributes['pages']'" etc.

  Order shipped
      {
      "Shipment": {
          "OrderID": "{{data.sourceOrderId}}",
          "ShippedDate": "{{data.shippedDate}}",
          "ShipmentItems": [
              {{#forEach data.items}}
              {
                  "ItemID": "{{sourceItemId}}",
                  "Quantity": "{{quantity}}",
                  "SKU": "{{sku}}"
              }{{#unless isLast}},{{/unless}}
              {{/forEach}}
          ],
          "TrackingNum": "{{data.trackingNumber}}", - Tracking number for this order
          "Method": "{{data.carrier.code}}/{{data.carrier.service}}" - Will state FedEx / 2 Day One Rate for example
          }
      }
```
