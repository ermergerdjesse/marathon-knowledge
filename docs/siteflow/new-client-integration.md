Here is the reformatted version preserving your exact document order: each product's specification notes/rules appear first, immediately followed by its clean, valid sample JSON payload, with the FAQ closing out the document.Markdown# Product Integration Specifications & Sample Payloads

This guide outlines payload requirements and valid sample data for submitting orders to Marathon Press via SiteFlow.

---

## Global Order & Shipping Rules

### Destination & Order
* **Destination (`destination.name`):** Must be set to `"hp.marathonpressinc"`
* **Customer Name (`customerName`):** Enter your assigned brand name
* **Order ID (`sourceOrderId`):** Unique order identifier. Preferred length is under 15 characters; maximum limit is 25 characters
* **Tags (`tags`):** Optional array for internal flags. Leave empty `[]` if unused
* **Item ID (`sourceItemId`):** Unique item identifier within a multi-book order
* **SKU (`sku`):** Product SKU (e.g., `CLIENT_10X10_HARDCOVER`). Final SKUs are provisioned upon product creation

### Shipping & Return Addresses (`shipments`)
* **Required Fields:** Missing required fields (`*`) will halt order preflight and prevent shipping label generation
* **Phone Numbers:** Required 10-digit format with digits only (no spaces, hyphens, or parentheses). If your platform does not collect a phone number, pass ten zeros (`"0000000000"`)
* **Country Codes:** Both `country` and `isoCountry` require the 2-character ISO country code (e.g., `"US"`). Both are required for domestic and international processing
* **Ship By Date (`shipByDate`):** Optional target dispatch date (`YYYY-MM-DD`) for transparency and scheduling visibility
* **Return Address:** Fully customizable to your brand details. Note that Marathon Press does not process physical package returns; address failures require a re-order submission

---

## 1. Printed Cover Hardcover Photo Book with Lamination

### Specifications
* **Components:** Requires two components: `pages` (interior book block) and `cover` (case wrap).
* **Attribute Mirroring:** Attributes are mirrored identically across both components to streamline integration.
* **Pages (`attributes.pages`):** Total count of individual pages inside the pages PDF.
* **Lamination (`attributes.lamination`):** Supported finishes: `"gloss"`, `"matte"`, or `"softtouch"`.

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
    "stockItems": [],
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
2. Printed Cover Layflat Photobook with Lamination Specifications <br />
Requires two components: pages (interior spreads) and cover (case wrap) <br />
Attribute Mirroring: Attributes are mirrored across both components <br />
Pages (attributes.pages): Total count of spreads in the pages PDF (e.g., 48 pages $\div$ 2 = 24) <br />
Lamination (attributes.lamination): Supported finishes: "gloss", "matte", or "softtouch" <br />
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
        "sku": "CLIENT_10X10_LAYFLAT",
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
    "stockItems": [],
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
3. Printed Cover Softcover with Lamination Specifications <br />
Requires two components: pages (interior book block) and cover (softcover wrap) <br />
Attribute Mirroring: Attributes are mirrored across both components <br />
Pages (attributes.pages): Total count of individual pages inside the pages PDF <br />
Lamination (attributes.lamination): Supported finishes: "gloss", "matte", or "softtouch" <br />
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
        "sku": "CLIENT_10X10_SOFTCOVER",
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
    "stockItems": [],
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
4. Fabric Wrapped Hardcover Photo Book Specifications <br />
Components: Requires two components: pages (interior book block) and cover (fabric preview/reference asset) <br />
Attribute Mirroring: Attributes are mirrored across both components <br />
Pages (attributes.pages): Total count of individual pages inside the pages PDF <br />
Cover Color (attributes.coverColor): Supported options: "Red", "Blue", "Pink", "Yellow", or "Black" for example <br />
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
        "sku": "CLIENT_10X10_LINEN_HARDCOVER",
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
              "coverColor": "Black"
            }
          },
          {
            "code": "cover",
            "fetch": true,
            "localFile": false,
            "path": "[https://s3.amazonaws.com/fakepdf/cover.pdf](https://s3.amazonaws.com/fakepdf/cover.pdf)",
            "attributes": {
              "pages": 24,
              "coverColor": "Black"
            }
          }
        ],
        "extraData": {}
      }
    ],
    "stockItems": [],
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
5. Fabric Wrapped Layflat Photo Book Specifications <br />
Components: Requires two components: pages (interior spreads) and cover (fabric preview/reference asset) <br />
Attribute Mirroring: Attributes are mirrored across both components <br />
Pages (attributes.pages): Total count of spreads in the pages PDF (e.g., 48 pages $\div$ 2 = 24) <br />
Cover Color (attributes.coverColor): Supported options: "Red", "Blue", "Pink", "Yellow", or "Black" for example <br />
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
        "sku": "CLIENT_10X10_LINEN_LAYFLAT",
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
              "coverColor": "Blue"
            }
          },
          {
            "code": "cover",
            "fetch": true,
            "localFile": false,
            "path": "[https://s3.amazonaws.com/fakepdf/cover.pdf](https://s3.amazonaws.com/fakepdf/cover.pdf)",
            "attributes": {
              "pages": 24,
              "coverColor": "Blue"
            }
          }
        ],
        "extraData": {}
      }
    ],
    "stockItems": [],
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
6. Fabric Wrapped Layflat Photo Book with Foil Stamping Specifications<br />
Components: Requires two components: pages (interior spreads) and cover (composite visual proof).<br />
Attribute Mirroring: Foil and binding attributes are mirrored identically across both components.<br />
Pages (attributes.pages): Total count of spreads in the pages PDF.<br />
Cover Color (attributes.coverColor): Supported options: "Red", "Blue", "Pink", "Yellow", or "Black" for examples<br />
Foil Line Structure: Foil details are structured sequentially per line:coverText[N]: Line text string.coverFont[N]: Font name.coverFontSize[N]: Font size string.coverPosition[N]: Vertical placement ("Top", "Middle", or "Bottom").coverAlignment[N]: Horizontal placement ("Left", "Middle", or "Right").<br />
Cover Asset (cover.path): Submit a composite rendering proof depicting foil stamping, foil color, and linen substrate.<br />
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
        "sku": "CLIENT_10X10_LINEN_LAYFLAT",
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
              "coverColor": "Black",
              "coverText1": "Line 1 of foil stamping",
              "coverFont1": "Line 1 Cover Font",
              "coverFontSize1": "Line 1 Cover Font Size",
              "coverPosition1": "Middle",
              "coverAlignment1": "Middle",
              "coverText2": "Line 2 of foil stamping",
              "coverFont2": "Line 2 Cover Font",
              "coverFontSize2": "Line 2 Cover Font Size",
              "coverPosition2": "Middle",
              "coverAlignment2": "Middle"
            }
          },
          {
            "code": "cover",
            "fetch": true,
            "localFile": false,
            "path": "[https://s3.amazonaws.com/fakepdf/cover.pdf](https://s3.amazonaws.com/fakepdf/cover.pdf)",
            "attributes": {
              "pages": 24,
              "coverColor": "Black",
              "coverText1": "Line 1 of foil stamping",
              "coverFont1": "Line 1 Cover Font",
              "coverFontSize1": "Line 1 Cover Font Size",
              "coverPosition1": "Middle",
              "coverAlignment1": "Middle",
              "coverText2": "Line 2 of foil stamping",
              "coverFont2": "Line 2 Cover Font",
              "coverFontSize2": "Line 2 Cover Font Size",
              "coverPosition2": "Middle",
              "coverAlignment2": "Middle"
            }
          }
        ],
        "extraData": {}
      }
    ],
    "stockItems": [],
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
Frequently Asked Questions
<br />
1. Why are attributes duplicated amongst components?
While this may require slightly more mapping up front during development, it minimizes development work needed when introducing new products, implementing platform improvements, or deploying additional customization options down the road.
2. Why is the Linen Foil Stamping broken out per line?
Due to our internal automation pipelines, foil stamping data is ingested through a normalized, fixed schema. Ingesting per-line parameters allows our production systems to route orders directly into the foil stamping queue with maximum speed and reliability.
3. What are the SKUs that will be sent on the order placement?
SKUs are finalized during client onboarding. They will be provided once your specific cover finishes, sizing specifications, and binding styles are created.
4. What if we don't gather the customer's phone numbers on order placement?
A 10-digit phone number is strictly required by carriers to generate shipping labels. If your customer checkout does not collect a phone number, pass ten zeros ("0000000000").
