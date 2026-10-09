The screenshot shows that line 45 has the entire FAQ collapsed onto a single continuous raw line in the text editor:   Frequently Asked Questions1. Why are attributes...[cite: 3]When you copy or paste text into that editor, standard newline characters (\n) are getting stripped or flattened into spaces, which destroys Markdown paragraphs and turns lists into one giant run-on sentence.   Below is the file with explicit HTML tags (<p>, <h3>, <strong>) for the FAQ section and block separations. HTML tags ignore editor newline stripping completely, ensuring each question, header, and paragraph forces its own visual space even if an editor flattens the whitespace.Markdown# Product Integration Specifications & Sample Payloads

This guide outlines payload requirements and valid sample data for submitting orders to Marathon Press via SiteFlow.

---

## Global Order & Shipping Rules

### Destination & Order Envelope
* **Destination (`destination.name`):** Must be set to `"hp.marathonpressinc"`.
* **Customer Name (`customerName`):** Enter your assigned brand name.
* **Order ID (`sourceOrderId`):** Unique order identifier. Preferred length is under 15 characters; maximum limit is 25 characters.
* **Tags (`tags`):** Optional array for internal flags. Leave empty `[]` if unused.
* **Item ID (`sourceItemId`):** Unique item identifier within a multi-book order.
* **SKU (`sku`):** Product SKU (e.g., `CLIENT_10X10_HARDCOVER`). Final SKUs are provisioned upon product creation.

### Shipping & Return Addresses (`shipments`)
* **Required Fields:** Missing required fields will halt order preflight and prevent shipping label generation.
* **Phone Numbers:** Required 10-digit format with digits only (no spaces, hyphens, or parentheses). If your platform does not collect a phone number, pass ten zeros (`"0000000000"`).
* **Country Codes:** Both `country` and `isoCountry` require the 2-character ISO country code (e.g., `"US"`). Both are required for domestic and international processing.
* **Ship By Date (`shipByDate`):** Optional target dispatch date (`YYYY-MM-DD`) for scheduling visibility.
* **Return Address:** Fully customizable to your brand details. Note that Marathon Press does not process physical package returns; address failures require a re-order submission.

---

## 1. Printed Cover Hardcover Photo Book with Lamination

### Specifications
| Attribute | Rule / Setting |
| :--- | :--- |
| **Components** | Requires two components: `pages` (interior book block) and `cover` (case wrap). |
| **Attribute Mirroring** | Attributes are mirrored identically across both components to streamline integration. |
| **Pages (`attributes.pages`)** | Total count of individual pages inside the pages PDF. |
| **Lamination (`attributes.lamination`)** | Supported finishes: `"gloss"`, `"matte"`, or `"softtouch"`. |

### Sample Payload

```json
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
2. Printed Cover Layflat Photobook with LaminationSpecificationsAttributeRule / SettingComponentsRequires two components: pages (interior spreads) and cover (case wrap).Attribute MirroringAttributes are mirrored across both components.Pages (attributes.pages)Total count of spreads in the pages PDF (e.g., 48 pages / 2 = 24).Lamination (attributes.lamination)Supported finishes: "gloss", "matte", or "softtouch".Sample PayloadJSON{
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
3. Printed Cover Softcover with LaminationSpecificationsAttributeRule / SettingComponentsRequires two components: pages (interior book block) and cover (softcover wrap).Attribute MirroringAttributes are mirrored across both components.Pages (attributes.pages)Total count of individual pages inside the pages PDF.Lamination (attributes.lamination)Supported finishes: "gloss", "matte", or "softtouch".Sample PayloadJSON{
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
4. Fabric Wrapped Hardcover Photo BookSpecificationsAttributeRule / SettingComponentsRequires two components: pages (interior book block) and cover (fabric preview/reference asset).Attribute MirroringAttributes are mirrored across both components.Pages (attributes.pages)Total count of individual pages inside the pages PDF.Cover Color (attributes.coverColor)Supported options: "Red", "Blue", "Pink", "Yellow", or "Black".Sample PayloadJSON{
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
5. Fabric Wrapped Layflat Photo BookSpecificationsAttributeRule / SettingComponentsRequires two components: pages (interior spreads) and cover (fabric preview/reference asset).Attribute MirroringAttributes are mirrored across both components.Pages (attributes.pages)Total count of spreads in the pages PDF (e.g., 48 pages / 2 = 24).Cover Color (attributes.coverColor)Supported options: "Red", "Blue", "Pink", "Yellow", or "Black".Sample PayloadJSON{
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
6. Fabric Wrapped Layflat Photo Book with Foil StampingSpecificationsAttributeRule / SettingComponentsRequires two components: pages (interior spreads) and cover (composite visual proof).Attribute MirroringFoil and binding attributes are mirrored identically across both components.Pages (attributes.pages)Total count of spreads in the pages PDF.Cover Color (attributes.coverColor)Supported options: "Red", "Blue", "Pink", "Yellow", or "Black".Line Text (coverText[N])String for Line N of foil stamping.Font (coverFont[N])Font name string for Line N.Font Size (coverFontSize[N])Font size string for Line N.Vertical Alignment (coverPosition[N])"Top", "Middle", or "Bottom".Horizontal Alignment (coverAlignment[N])"Left", "Middle", or "Right".Cover Asset (cover.path)Composite rendering proof depicting foil stamping, foil color, and linen substrate.Sample PayloadJSON{
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
