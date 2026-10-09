# Infotech Examples

Most of our Infotechs are based on one another. They use the same base CSS and HTML structure, with some customization depending on the product.

The most complex Infotechs are the **Signature Layflats**, so they are a good example to reference when adding or modifying code.

---

## Adding Items to Infotechs

### Example: Adding an Inventory Number to Paper Binders

For Paper Binders, we needed to add a computed attribute to the product that looks up the SKU and translates it into the corresponding inventory number.

We don't have the inventory numbers available directly, so the first step is to go through the **filmaker** to pull the inventory numbers.

### Inventory Number Example

| UPC | Product | Inventory # |
|---|---|---:|
| `5061107242804` | Garden Binderfolio Green 7.4 × 9.6 | `10452` |

---

## SKU → Inventory Number Lookup

After gathering the inventory numbers, we need to create a lookup that translates the SiteFlow item SKU into the corresponding inventory number.

This is done using a `SWITCH` statement:

```text
=SWITCH(itemSku,
"PR31930124","10452",
"PR31930172","10443",
"PR31930136","10450",
"PR31930158","10451",
"PR31930125","10453",
"PR21930906","10497",
"PR21931071","10498",
"PR21931805","10499",
"PR21936008","10500",
"NEW INVENTORY")
```
## Other Useful Tools
Property Help - https://www.w3schools.com/css
  This goes into detail on possible CSS strings to uniquely identify infotechs or adding images
