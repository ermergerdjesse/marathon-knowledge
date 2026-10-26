## Sending Stock Items
Stock items are items that are preproduced items that are pulled off the shelf for fulfillment at the time of shipping
### Two Types of Stock Item Orders
1. A stock item assigned to a regular printed order
2. A stock item assigned to a fake product in order to receive a stock item-only order

#### Regular Order with Stock Item
This is an order with a regular item that is printed and assigned a stock item
{
  "destination": {
    "name": "hp.marathonpressinc"
  },
  "orderData": {
    "customerName": "BRANDNAMEHERE",
    "sourceOrderId": "1234124",
    "tags": [],
    "items": [
      {
        "sku": "CLIENT_10X10_HARDCOVER",
        "sourceItemId": "1651651",
        "quantity": 1,
        "components": [
          {
            "code": "pages",
            "fetch": true,
            "localFile": false,
            "path": "[https://s3.amazonaws.com/fakepdf/pages.pdf](https://s3.amazonaws.com/fakepdf/pages.pdf)",
            "attributes": {
              "pages": 24,
              "lamination": "gloss"
            }
          },
          {
            "code": "cover",
            "fetch": true,
            "localFile": false,
            "path": "[https://s3.amazonaws.com/fakepdf/cover.pdf](https://s3.amazonaws.com/fakepdf/cover.pdf)",
            "attributes": {
              "pages": 24,
              "lamination": "gloss"
            }
          }
        ],
        "extraData": {}
      }
    ],
    "stockItems": [
      {
        "code": "STOCKITEMSKUHERE",
        "name": "STOCKITEMSKUHERE",
        "quantity": 1,
        "shipmentIndex": 0
      }
    ],
    "shipments": [
      {
        "carrier": {
          "alias": "FDX_STD_OVN"
        },
        "carrierFields": {},
        "shipByDate": "2026-12-22",
        "shipTo": {
          "name": "Jesse Ashker",
          "address1": "1500 Square Turn Blvd",
          "address2": "",
          "address3": "",
          "town": "Norfolk",
          "state": "NE",
          "postcode": "68779",
          "country": "US",
          "isoCountry": "US",
          "email": "jessea@marathonpress.net",
          "phone": "8002280629"
        },
        "returnAddress": {
          "name": "Brand Name",
          "address1": "1500 Square Turn Blvd",
          "address2": "",
          "address3": "",
          "town": "Norfolk",
          "state": "NE",
          "postcode": "68701",
          "country": "US",
          "isoCountry": "US",
          "email": "help@help.com",
          "phone": "8002280629"
        }
      }
    ]
  }
}
---
#### Stock Item Only Order
Siteflow does not allow a stock item-only order, as it is not able to print a production ticket without having a printed item associated with it. This is a workaround for this flaw.
A fake product with a "print" component is below,

{
  "destination": {
    "name": "hp.marathonpressinc"
  },
  "orderData": {
    "customerName": "BRANDNAMEHERE",
    "sourceOrderId": "1234124",
    "tags": [],
    "items": [
      {
        "sku": "STOCKITEM_DUMMYSKU",
        "sourceItemId": "1651651",
        "quantity": 1,
        "components": [
          {
            "code": "print",
            "fetch": true,
            "localFile": false,
            "path": "fakepdf.com",
            "attributes": {}
          }
        ],
        "extraData": {}
      }
    ],
    "stockItems": [f
      {
        "code": "STOCKITEMSKUHERE",
        "name": "STOCKITEMSKUHERE",
        "quantity": 1,
        "shipmentIndex": 0
      }
    ],
    "shipments": [
      {
        "carrier": {
          "alias": "FDX_STD_OVN"
        },
        "carrierFields": {},
        "shipByDate": "2026-12-22",
        "shipTo": {
          "name": "Jesse Ashker",
          "address1": "1500 Square Turn Blvd",
          "address2": "",
          "address3": "",
          "town": "Norfolk",
          "state": "NE",
          "postcode": "68779",
          "country": "US",
          "isoCountry": "US",
          "email": "jessea@marathonpress.net",
          "phone": "8002280629"
        },
        "returnAddress": {
          "name": "Brand Name",
          "address1": "1500 Square Turn Blvd",
          "address2": "",
          "address3": "",
          "town": "Norfolk",
          "state": "NE",
          "postcode": "68701",
          "country": "US",
          "isoCountry": "US",
          "email": "help@help.com",
          "phone": "8002280629"
        }
      }
    ]
  }
}
