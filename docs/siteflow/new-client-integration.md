# New Client Integration Steps, Examples, and Information
---
## Clients who are starting integration with Marathon/Siteflow
Documentation - https://hpsiteflow.com/docs/siteflow/about.html.

Roadmap
---
1. Read through the documentation at https://hpsiteflow.com/docs/siteflow/about.html and note the gotchas below.
1. Determine which shipping carriers/methods will be used and provide any of the relevant details.
2. Get the order item structure from us for each of the products we will be fulfilling.
3. Get SiteFlow authentication working. Let us know when you want to start this step so that we can get you credentials. 
4. Using a predetermined testing shipping method, get the order structure correct by using the validate API call (https://hpsiteflow.com/docs/api-reference/siteflow-pro.html#/Order/post_order_validate)
5. Confirm we have the shipping carriers/methods from step 1 set up on our end.
6. Submit test orders into production to be printed and shipped. Confirm printing and shipping were correctly performed.
7. Set up an endpoint to receive JSON postbacks for various events from SiteFlow. The most commonly used events are "Order Received", "Order Errored", "Order Cancelled", and "Shipment Shipped". For each event, let us know the URL, HTTP method, JSON format, and credentials (if any) to use. Stick to basic authentication. SiteFlow does not support OAuth.
8. Submit more test orders into production to be printed and shipped and confirm that postbacks are working.
9. Go live.
Gotchas/Points of Confusion
---
1. There are 2 different endpoints to which requests should be sent:
  * For submitting orders into production, use https://orders.oneflow.io/api as the base. In other words, POSTing to https://orders.oneflow.io/api/order to create a production order would be the only time this is used.
  * All other requests should use https://pro-api.oneflowcloud.com/api as the base. This would be used for cancelling orders, getting order statuses, updating shipping details, testing potential order data with a POST to /order/validate, etc.
2. There is little useful immediate feedback from POSTing to https://orders.oneflow.io/api/order to create a production order. Any non-authentication error arising from the production order creation API call is only available through the SiteFlow UI or through an "Order Errored" postback configured in SiteFlow, beforehand.
3. Once an order is placed into production, no editing of the order details is possible beyond shipping details and methods, adding/removing order tags, and cancellation.
4. There is no true test environment. Any orders submitted into production for test purposes, and not intended for fulfillment, must be cancelled before being printed. Order data can be validated to a limited extent by POSTing it to https://pro-api.oneflowcloud.com/api/order/validate. Again, the validation is limited, there may be certain aspects of some order item products that the validate call does not handle correctly.
---
## Sample Data to send clients for products
---
### Printed Cover Hardcover Photo Book with Lamination
---
{
    "destination": {
        "name": "hp.marathonpressinc"
    },
    "orderData": {
"customerName": "BRANDNAMEHERE", - Enter brand name here
        "sourceOrderId": "1234124", - Unique Order ID Here, less than 15 characters preferred, no more than 25 at the absolute max
        "tags": [],
        "items": [
            {
                "components": [
                    {
                        "attributes": {
                            "pages": 24 - Pages within the pages PDF URL,
			                "lamination": “gloss|matte|softtouch"
                        },
                        "code": "pages",
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/pages.com" - URL to the pages PDF
                    },
                    {
                        "attributes": {
                            "pages": 24 - Pages within the pages PDF URL,
			                "lamination": “gloss|matte|softtouch"
                        },
                        "code": "cover", - You will notice the attributes are mirrored on the cover and pages component. There is nothing unique per component to make it easier to integrate.
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/cover.com" - URL to the cover PDF
                    }
                ],
                "quantity": 1,
                "sku": "INSERTSKUHERE”, - Could be CLIENT_10X10_HARDCOVER as an example. These will be sent over at a later date when the products are created
                "sourceItemId": "1651651", Unique Item ID. Here, this identifies one single item in a multiple book order
                "extraData": {
                },
            }
        ],
        "stockItems": [],
        "shipments": [
            {
                "shipTo": {
                    *strings are required to be in data for us to ship the order, if not present, we cannot generate a shipping label and will delay the order*
                    *"name": "Jesse Ashker",
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "", Blank, if not applicable
                    "address3": "", Blank, if not applicable
                    *"town": "Norfolk", - Ship to City
                    *"state": "NE", - Ship to State
                    *"postcode": "68779", Ship to Zip Code
                    8"country": "US", - 2 character country abbreviation code
                    *"isoCountry": "US", - 2 character country abbreviation code, need both to ship international orders
                    *"email": "jessea@marathonrpess.net",
                    *"phone": "8002280629" - 10-digit phone number, no special characters, no hyphens etc.
                },
                "returnAddress": {
                    *"name": "Brand Name", - Can change the return address to anything you like. We don't handle returned packages and would need a re-order for us to re-ship an item due to a bad address
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "",
                    "address3": "",
                    *"town": "Norfolk",
                    *"state": "NE",
                    *"postcode": "68701",
                    *"isoCountry": "US",
                    *"email": "help@help.com",
                    *"phone": "8002280629"
                },
                "carrier": {
                    "alias": "FDX_STD_OVN" - All available aliases further below
                },
                "carrierFields": {
                },
                "shipByDate": "2222-12-22" - What date the order needs to ship out by. This is a nice-to-have for transparency, seeing when the customer is expecting their order; not necessary if it is not possible
            }
        ]
    }
}
---
### Printed Cover Layflat Photobook with Lamination
{
    "destination": {
        "name": "hp.marathonpressinc"
    },
    "orderData": {
"customerName": "BRANDNAMEHERE", - Enter brand name here
        "sourceOrderId": "1234124", - Unique Order ID Here, less than 15 characters preferred, no more than 25 at the absolute max
        "tags": [],
        "items": [
            {
                "components": [
                    {
                        "attributes": {
                            "pages": 24 - Spreads within the pages PDF URL, (48 pages / 2)
			                "lamination": “gloss|matte|softtouch"
                        },
                        "code": "pages",
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/pages.com" - URL to the pages PDF
                    },
                    {
                        "attributes": {
                            "pages": 24 - Spreads within the pages PDF URL, (48 pages / 2)
			                "lamination": “gloss|matte|softtouch"
                        },
                        "code": "cover", - You will notice the attributes are mirrored on the cover and pages component. There is nothing unique per component to make it easier to integrate.
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/cover.com" - URL to the cover PDF
                    }
                ],
                "quantity": 1,
                "sku": "INSERTSKUHERE”, - Could be CLIENT_10X10_LAYFLAT as example. These will be sent over at a later date when the products are created
                "sourceItemId": "1651651", Unique Item ID Here, this identifies one single item in a multiple book order
                "extraData": {
                },
            }
        ],
        "stockItems": [],
        "shipments": [
            {
                "shipTo": {
                    *strings are required to be in data for us to ship the order, if not present, we cannot generate a shipping label and will delay the order*
                    *"name": "Jesse Ashker",
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "", Blank, if not applicable
                    "address3": "", Blank, if not applicable
                    *"town": "Norfolk", - Ship to City
                    *"state": "NE", - Ship to State
                    *"postcode": "68779", Ship to Zip Code
                    8"country": "US", - 2 character country abbreviation code
                    *"isoCountry": "US", - 2 character country abbreviation code, need both to ship international orders
                    *"email": "jessea@marathonpress.net",
                    *"phone": "8002280629" - 10 digit phone number, no special characters, no hyphens etc.
                },
                "returnAddress": {
                    *"name": "Brand Name", - Can change the return address to anything you like. We don't handle returned packages and would need a re-order for us to re-ship an item due to a bad address
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "",
                    "address3": "",
                    *"town": "Norfolk",
                    *"state": "NE",
                    *"postcode": "68701",
                    *"isoCountry": "US",
                    *"email": "help@help.com",
                    *"phone": "8002280629"
                },
                "carrier": {
                    "alias": "FDX_STD_OVN" - All available aliases further below
                },
                "carrierFields": {
                },
                "shipByDate": "2222-12-22" - What date the order needs to ship out by, - This is a nice to have for transparency seeing when the customer is expecting their order, not necessary, if it is not possible
            }
        ]
    }
}
---
### Printed Cover Softcover with Lamination
{
    "destination": {
        "name": "hp.marathonpressinc"
    },
    "orderData": {
"customerName": "BRANDNAMEHERE", - Enter brand name here
        "sourceOrderId": "1234124", - Unique Order ID Here, less than 15 characters preferred, no more than 25 at the absolute max
        "tags": [],
        "items": [
            {
                "components": [
                    {
                        "attributes": {
                            "pages": 24 - Pages within the pages PDF URL,
			                "lamination": “gloss|matte|softtouch"
                        },
                        "code": "pages",
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/pages.com" - URL to the pages PDF
                    },
                    {
                        "attributes": {
                            "pages": 24 - Pages within the pages PDF URL,
			                "lamination": “gloss|matte|softtouch"
                        },
                        "code": "cover", - You will notice the attributes are mirrored on the cover and pages component. There is nothing unique per component to make it easier to integrate.
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/cover.com" - URL to the cover PDF
                    }
                ],
                "quantity": 1,
                "sku": "INSERTSKUHERE”, - Could be CLIENT_10X10_SOFTCOVER as an example. These will be sent over at a later date when the products are created
                "sourceItemId": "1651651", Unique Item ID. Here, this identifies one single item in a multiple book order
                "extraData": {
                },
            }
        ],
        "stockItems": [],
        "shipments": [
            {
                "shipTo": {
                    *strings are required to be in data for us to ship the order, if not present, we cannot generate a shipping label and will delay the order*
                    *"name": "Jesse Ashker",
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "", Blank, if not applicable
                    "address3": "", Blank, if not applicable
                    *"town": "Norfolk", - Ship to City
                    *"state": "NE", - Ship to State
                    *"postcode": "68779", Ship to Zip Code
                    8"country": "US", - 2-character country abbreviation code
                    *"isoCountry": "US", - 2-character country abbreviation code, need both to ship international orders
                    *"email": "jessea@marathonrpess.net",
                    *"phone": "8002280629" - 10-digit phone number, no special characters, no hyphens etc.
                },
                "returnAddress": {
                    *"name": "Brand Name", - Can change the return address to anything you like. We don't handle returned packages and would need a re-order for us to re-ship an item due to a bad address
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "",
                    "address3": "",
                    *"town": "Norfolk",
                    *"state": "NE",
                    *"postcode": "68701",
                    *"isoCountry": "US",
                    *"email": "help@help.com",
                    *"phone": "8002280629"
                },
                "carrier": {
                    "alias": "FDX_STD_OVN" - All available aliases further below
                },
                "carrierFields": {
                },
                "shipByDate": "2222-12-22" - What date the order needs to ship out by. This is a nice-to-have for transparency, seeing when the customer is expecting their order; not necessary if it is not possible
            }
        ]
    }
}
---
### Fabric Wrapped Hardcover Photo Book
{
    "destination": {
        "name": "hp.marathonpressinc"
    },
    "orderData": {
"customerName": "BRANDNAMEHERE", - Enter brand name here
        "sourceOrderId": "1234124", - Unique Order ID Here, less than 15 characters preferred, no more than 25 at the absolute max
        "tags": [],
        "items": [
            {
                "components": [
                    {
                        "attributes": {
                            "pages": 24 - Pages within the pages PDF URL,
      			                "coverColor": “Red|Blue|Pink|Yellow|Black"
                        },
                        "code": "pages",
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/pages.com" - URL to the pages PDF
                    },
                    {
                        "attributes": {
                            "pages": 24 - Pages within the pages PDF URL,
      			                "coverColor": “Red|Blue|Pink|Yellow|Black"
                        },
                        "code": "cover", - You will notice the attributes are mirrored on the cover and pages component. There is nothing unique per component to make it easier to integrate.
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/cover.com" - URL to the cover PDF
                    }
                ],
                "quantity": 1,
                "sku": "INSERTSKUHERE”, - Could be CLIENT_10X10_LINEN_HARDCOVER as an example. These will be sent over at a later date when the products are created
                "sourceItemId": "1651651", Unique Item ID. Here, this identifies one single item in a multiple book order
                "extraData": {
                },
            }
        ],
        "stockItems": [],
        "shipments": [
            {
                "shipTo": {
                    *strings are required to be in data for us to ship the order, if not present, we cannot generate a shipping label and will delay the order*
                    *"name": "Jesse Ashker",
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "", Blank, if not applicable
                    "address3": "", Blank, if not applicable
                    *"town": "Norfolk", - Ship to City
                    *"state": "NE", - Ship to State
                    *"postcode": "68779", Ship to Zip Code
                    8"country": "US", - 2-character country abbreviation code
                    *"isoCountry": "US", - 2-character country abbreviation code, need both to ship international orders
                    *"email": "jessea@marathonpress.net",
                    *"phone": "8002280629" - 10-digit phone number, no special characters, no hyphens etc.
                },
                "returnAddress": {
                    *"name": "Brand Name", - Can change the return address to anything you like. We don't handle returned packages and would need a re-order for us to re-ship an item due to a bad address
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "",
                    "address3": "",
                    *"town": "Norfolk",
                    *"state": "NE",
                    *"postcode": "68701",
                    *"isoCountry": "US",
                    *"email": "help@help.com",
                    *"phone": "8002280629"
                },
                "carrier": {
                    "alias": "FDX_STD_OVN" - All available aliases further below
                },
                "carrierFields": {
                },
                "shipByDate": "2222-12-22" - What date the order needs to ship out by. This is a nice-to-have for transparency, seeing when the customer is expecting their order; not necessary if it is not possible
            }
        ]
    }
}
---
### Fabric Wrapped Layflat Photo Book
{
    "destination": {
        "name": "hp.marathonpressinc"
    },
    "orderData": {
"customerName": "BRANDNAMEHERE", - Enter brand name here
        "sourceOrderId": "1234124", - Unique Order ID Here, less than 15 characters preferred, no more than 25 at the absolute max
        "tags": [],
        "items": [
            {
                "components": [
                    {
                        "attributes": {
                            "pages": 24 - Spreads within the pages PDF URL,
      			                "coverColor": “Red|Blue|Pink|Yellow|Black"
                        },
                        "code": "pages",
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/pages.com" - URL to the pages PDF
                    },
                    {
                        "attributes": {
                            "pages": 24 - Spreads within the pages PDF URL,
      			                "coverColor": “Red|Blue|Pink|Yellow|Black"
                        },
                        "code": "cover", - You will notice the attributes are mirrored on the cover and pages component. There is nothing unique per component to make it easier to integrate.
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/cover.com" - URL to the cover PDF
                    }
                ],
                "quantity": 1,
                "sku": "INSERTSKUHERE”, - Could be CLIENT_10X10_LINEN_LAYFLAT as an example. These will be sent over at a later date when the products are created
                "sourceItemId": "1651651", Unique Item ID. Here, this identifies one single item in a multiple book order
                "extraData": {
                },
            }
        ],
        "stockItems": [],
        "shipments": [
            {
                "shipTo": {
                    *strings are required to be in data for us to ship the order, if not present, we cannot generate a shipping label and will delay the order*
                    *"name": "Jesse Ashker",
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "", Blank, if not applicable
                    "address3": "", Blank, if not applicable
                    *"town": "Norfolk", - Ship to City
                    *"state": "NE", - Ship to State
                    *"postcode": "68779", Ship to Zip Code
                    8"country": "US", - 2-character country abbreviation code
                    *"isoCountry": "US", - 2-character country abbreviation code, need both to ship international orders
                    *"email": "jessea@marathonpress.net",
                    *"phone": "8002280629" - 10-digit phone number, no special characters, no hyphens etc.
                },
                "returnAddress": {
                    *"name": "Brand Name", - Can change the return address to anything you like. We don't handle returned packages and would need a re-order for us to re-ship an item due to a bad address
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "",
                    "address3": "",
                    *"town": "Norfolk",
                    *"state": "NE",
                    *"postcode": "68701",
                    *"isoCountry": "US",
                    *"email": "help@help.com",
                    *"phone": "8002280629"
                },
                "carrier": {
                    "alias": "FDX_STD_OVN" - All available aliases further below
                },
                "carrierFields": {
                },
                "shipByDate": "2222-12-22" - What date the order needs to ship out by. This is a nice-to-have for transparency, seeing when the customer is expecting their order; not necessary if it is not possible
            }
        ]
    }
}
---
### Fabric Wrapped Layflat Photo Book with Foil Stamping
{
    "destination": {
        "name": "hp.marathonpressinc"
    },
    "orderData": {
"customerName": "BRANDNAMEHERE", - Enter brand name here
        "sourceOrderId": "1234124", - Unique Order ID Here, less than 15 characters preferred, no more than 25 at the absolute max
        "tags": [],
        "items": [
            {
                "components": [
                    {
                        "attributes": {
                            "pages": 24 - Spreads within the pages PDF URL,
      			                "coverColor": “Red|Blue|Pink|Yellow|Black",
                            "coverText1": "Line 1 of foil stamping",
                            "coverFont1": "Line 1 Cover Font",
                            "coverFontSize1": "Line 1 Cover Font Size",
                            "coverPosition1": "Line 1 placement (VERTICAL PLACEMENT OF COVER) "Top", "Middle", or "Bottom",
                            "coverAlignment1": "Line 1 placement (HORIZONTAL PLACEMENT OF COVER) "Left", "Middle", or "Right",
                            "coverText2": "Line 2 of foil stamping",
                            "coverFont2": "Line 2 Cover Font",
                            ...
                        },
                        "code": "pages",
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/pages.com" - URL to the pages PDF
                    },
                    {
                        "attributes": {
                            "pages": 24 - Spreads within the pages PDF URL,
      			                "coverColor": “Red|Blue|Pink|Yellow|Black",
                            "coverText1": "Line 1 of foil stamping",
                            "coverFont1": "Line 1 Cover Font",
                            "coverFontSize1": "Line 1 Cover Font Size",
                            "coverPosition1": "Line 1 placement (VERTICAL PLACEMENT OF COVER) "Top", "Middle", or "Bottom",
                            "coverAlignment1": "Line 1 placement (HORIZONTAL PLACEMENT OF COVER) "Left", "Middle", or "Right",
                            "coverText2": "Line 2 of foil stamping",
                            "coverFont2": "Line 2 Cover Font",
                            ...
                        },
                        "code": "cover", - You will notice the attributes are mirrored on the cover and pages component. There is nothing unique per component to make it easier to integrate.
                        "fetch": true,
                        "localFile": false,
                        "path": "https://amazonaws.com/fakepdf/cover.com" - URL to the cover PDF - A preview generated of the final product. Should include foil stamping, foil color, and linen color
                    }
                ],
                "quantity": 1,
                "sku": "INSERTSKUHERE”, - Could be CLIENT_10X10_LINEN_LAYFLAT as an example. These will be sent over at a later date when the products are created
                "sourceItemId": "1651651", Unique Item ID. Here, this identifies one single item in a multiple book order
                "extraData": {
                },
            }
        ],
        "stockItems": [],
        "shipments": [
            {
                "shipTo": {
                    *strings are required to be in data for us to ship the order, if not present, we cannot generate a shipping label and will delay the order*
                    *"name": "Jesse Ashker",
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "", Blank, if not applicable
                    "address3": "", Blank, if not applicable
                    *"town": "Norfolk", - Ship to City
                    *"state": "NE", - Ship to State
                    *"postcode": "68779", Ship to Zip Code
                    8"country": "US", - 2 character country abbreviation code
                    *"isoCountry": "US", - 2 character country abbreviation code, need both to ship international orders
                    *"email": "jessea@marathonpress.net",
                    *"phone": "8002280629" - 10-digit phone number, no special characters, no hyphens etc.
                },
                "returnAddress": {
                    *"name": "Brand Name", - Can change the return address to anything you like. We don't handle returned packages and would need a re-order for us to re-ship an item due to a bad address
                    *"address1": "1500 Square Turn Blvd",
                    "address2": "",
                    "address3": "",
                    *"town": "Norfolk",
                    *"state": "NE",
                    *"postcode": "68701",
                    *"isoCountry": "US",
                    *"email": "help@help.com",
                    *"phone": "8002280629"
                },
                "carrier": {
                    "alias": "FDX_STD_OVN" - All available aliases are listed below
                },
                "carrierFields": {
                },
                "shipByDate": "2222-12-22" - What date the order needs to ship out by. This is a nice-to-have for transparency, seeing when the customer is expecting their order; not necessary if it is not possible
            }
        ]
    }
}
---
FAQ
1. Why are attributes duplicated amongst components?
   This may increase the amount of development work up front for you, but it will decrease the amount of work needed on new products, further improvements on the product, or additional customization options.
2. Why is the Linen Foil Stamping broken out per line?
   Due to our internal automation, there is a specific way we ingest the foil stamping data. If it is not normalized, it will require a tremendous amount of work to cater to different structures. The data sent specifically as listed has the fastest and most conistent workflow assigned.
3. What are the SKUs that will be sent on the order placement?
   This is not determined yet and will be set up at a later date once all of the specifications are finalized
4. What if we don't gather the customer's phone numbers on order placement?
   This is required to send a 10-digit phone number on all shipments. Send 10 0s for anything that does not have a phone number
