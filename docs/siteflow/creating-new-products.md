# Creating new products in SiteFlow
Divided into product categories, so make sure to search the page for what is needed

### Hardcovers
Hardcovers are probably the easiest product to add, as the product itself is very simple compared to other complex products in our offering.
1. Determine the product size from the client
We can do 6x6 - 12x12 PUR-bound books. 12.5" is our current limitation on our PUR machines, so a 12x12 is sufficient.
If a hardcover size is not in this list, please ask first if we want to add the size. This is due to us already having 100 board sizes and would like to stay away from creating a new size.
#### Main sizes
- 6×8
- 8×6
- 8x8
- 9x9
- 8.25×11
- 8.5x11
- 11×8.25
- 11.69×8.27
- 8.5×8.5
- 10×10
- 12×12
- 8.27×11.69
- 11.69×8.27
- 11.57×11.57
#### Other Sizes Offered
- 5.5×8.5
- 6×6
- 6×9
- 6.5×10
- 7.5×10.5
- 7.75×9.25
- 8×10
- 8×11
- 8×12
- 9×12
- 9.5×12
- 10×8
- 11×8
- 11×8.5
- 11×11
- 12×8

#### Creating a Hardcover Product
1. After gathering the product sizes from the client, use the list above to make the integration easier
2. Download a file from an existing client, pages and hardcover, and inspect the PDF for the exact file size needed
- If they want to offer a 10x10, download a 10x10 Artifact Hardcover and use the file size there to send them the exact dimensions needed
-   For a 10x10 Hardcover Pages, they need to send us a file size of 10.25 x 10.25; this is for 0.125"/1/8" on all 4 sides for the pages
-   For a 10x10 Hardcover Cover, download a 10x10 Artifact Photowrap Cover to get the sizing. Hardcover covers are a bit easier; the file size is the final size + 1.5" (H) for the wrapping area
Sample files will be available on Google Drive sometime, but it is a large undertaking. Ask for help in the meantime

#### Setup in SiteFlow - Hardcover
For the sample below, I'm basing this product off an Artifact 10x10 Hardcover
1. Go to SiteFlow > Products > duplicate the product you want to base it on
2. After duplicating, rename the duplicate product to the client abbreviation + book size
3. After renaming, the product page will open for further customization
4. Since this Artifact 10x10 Hardcover is so customizable compared to other products, we have to go through and delete most of the attributes, keeping the essentials
5. Delete everything off the cover and pages component except for "pages", "stock", and "bookSizeAbr", since these are necessities
6. Once completed, we need to think of all of the information that will be shown on the infotech or cover and add those attributes
- These can include "lamination", "boardSize", "endsheetType", etc., anything that improves QOL in production or billing
- Compare other 10x10 hardcover products that aren't as complex to get a feel for QOL attributes
7. After adding the attributes, we need to delete the auto-send to device, as we're still testing and don't want a test order to be sent to press and we print a million bad press sheets
8. Next, use the imposition standardization sheet to determine what imposition to use
- Common questions
Anything with HC_(x)P will have a fabric option, or be printed. Use printed if this cover is printed on a digital press. The fabric option combines an internal lookup for cloth to assign and cover match, so this is not needed for this sample product
9. Once the imposition is determined, duplicate the existing imposition, rename it to the new client abbreviation + book size + printed cover
10. Go into the imposition, determine all of the special marks that need adjusted
11. After adjusting them, the imposition is completed. Now, we have to do the same thing for the cover
12. Duplicate the cover imposition you would like to use, and change the information within the imposition specific to this client
13. After that, go back to the product, as we need to create an infotech for production. I'm not going to walk through this, as this takes some knowledge of CSS and HTML, so if this is needed and you don't know how, Jesse can help you walk through it
14. After the infotech is created, we can now assign the default imposition for the pages, cover, and infotech for the pages
15. Now, we need to set this product up for printing. Determine where the product will be sent. 2026 Hardcover Standardization in Switch takes 90% of the hardcover books we do and is pre-set up to take the paper type and group it with other products
16. We need to receive a test order from the client at this point. Once received, send the batch manually to the event you want to test the workflow
17. If everything makes it to press, test print the entire job to make sure everything looks correct on the sheets, infotech, cover wraparound, press cutting, and paper name at press
18. If everything is correct, we are ready to go live! Make the auto-send default to wherever is needed, save it, and that is complete!
There are a lot of things that can go wrong or be incorrect above, so I will list out the most common issues below.

#### FAQ/Issues
1. Why don't we want to create new hardcover sizes?
Hardcovers require physical boards to make the cover. We have several boards right now; the only difference is 0.25" in height compared ot a different board
2. A customer submitted an order, but it didn't go through into Site Flow
Ask for the JSON from the Customer, and look the data over to make sure everything looks good. If it does, it is on our side. Go to Orders > Submission Errors, and the error will be there
3. The test order printed badly on the press
Refer back to Standard Impositions. These were set up to make the new product development easier and faster. If a custom imposition is set up, it is prone to errors
4. The batch is failing to send to press
Refer to troubleshooting, but the shortest steps to take are here;
- Check if the input method & ticket template are created on the press
- Check if you're sending the job to the correct press (the press can't print the size needed, etc.)
- Check if you're sending the job to the correct switch workflow (ask for help if unknown)
- Check the device agent you're sending to for an extensive error, and it will tell you exactly why it cannot be received
