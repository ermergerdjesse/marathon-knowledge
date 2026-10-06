# Importing Shipping Labels for B2B Customers in FedEx Ship Manager
1. Open FedEx Ship Manager  

2. Locate the CSV file that contains the shipping information for the order and look it over forany obvious mistakes that could cause a failed label (lowercase letters in state abbreviations,zip codes with insufficient numbers, etc.) and then save and close.  

3. Navigate back to FedEx Ship Manager and ensure you are in the section “Ship” and sub-section “Shipment details.”  

4. Locate “Sender information” in the bottom left of the page. Change the sender to the correct business name. The return address should be “MARATHON - Marathon Press.”  

5. At the top of the application, click “Databases” → “File Maintenance” → “Import”  

6. Change the Template Name to “Batch Import” and change the Import Behavior to “Replacecurrent data.”  

7. Click Browse and locate the CSV file by changing file type in the explorer to import it (ensureExcel is closed first). Click OK.  

8. Towards the top of the application, click the “Shipping List” dropdown and click “Hold File.”  

9. Look over the spreadsheet in the FedEx Ship Manager viewer and check for any mistakes that might cause label failures. Once you have looked over the sheet and made the properedits, click “Select All” and click “Ship.” This will start to print out all of the labels from theCSV.  

10. After the labels have printed, go back through the list and make corrections to any errors that are presented.  

  a. Tips: If a zip code causes the failure, it most likely needs a “0” in front of it. If a stateabbreviation causes the failure, it’s most likely a capitalization error. Check for typos inaddress.  

11. Continue to troubleshoot through the list by fixing any errors and repeating Step 9 until theentire sheet is complete.  
