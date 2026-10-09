# This is to help show whether an issue is our fault or the client's. It isn't to blame each other, but to show where the issue needs to be fixed
## Incorrect SKU Placement
When a client places an incorrect SKU under a speciality product, it messes a lot up.
_Speciality products include 7x7s, static items, custom foil stamping_
For example, 
1. AU 7x7 books are static spread counts. This goes to press with a specific imposition to put every book all the way down the sheet, instead of sorting every page manually. If a SKU == 20 spreads but is sent as 25, it messes the imposition up.
2. Papier Notebooks come pre-stamped from another supplier, and we pull based on the SKU. If they order a Papier Stamped Notebook, but the SKU they sent is for a Marathon Stamped Notebook, this causes a lot of confusion.
3. Custom die-stamped books are specific to the design. If they order a book for stamping 2027 in large letters, middle-center, but the SKU is 2026 and the ticket is incorrect, this is their issue
<br />
## Incorrect Page Counts
When a client places incorrect page counts under any product, it messes up more than just production. This will impact production, billing, and forecasting if not handled in a timely manner.
For example,
1. A client sends only 24 pages for every book they order, but in their data they send 240 pages.
  We will undercharge this customer for the missing 200+ pages that were printed but not sent on the order. There is a fix for this now, but it is better to be safe and send the correct page count.
2. Client sends 101 pages, but the PDF is for 52 pages.
  This messes up the page information that is printed in the book needed to fulfill the order. It will say Page 1 of 101, Page 2 of 101, up to Page 52 of 101 (since 52 is the last page in the PDF), so we will think the pages are missing.
<br />
## Poor PDF Generation
See Siteflow > Errored Files for more information on this
A client wants a 12x12 book ordered, but they send a PDF for an 8x8 book. We can't do anything about this and have to cancel the order. The easiest way to determine this is to open the PDF in a browser and click Document Properties, or open it in Acrobat (ctrl + d) to check Document Properties.
<br />
## Incorrect Shipping Method/Info
Siteflow performs Ship To address and return address verification to minimize the number of packages we get back. There are several restrictions on shipping that the clients need to be aware of.
1. Return Address has to be a US-based location.
  A lot of shipping methods in the US are only available in the US. If we say this package is from the UK, we physically can't generate a label since this carrier requires a valid US Location and Pickup.
2. Per Shipping method, a lot of methods have a limitation to only one box, can't exceed "x" dimensions, or special packaging is needed
<br />
## Locating failed/errored postbacks
See Siteflow > New Integration Steps
