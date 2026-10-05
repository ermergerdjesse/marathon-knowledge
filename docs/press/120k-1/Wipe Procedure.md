12k DFE WIPE INSTRUCTIONS PROVIDED BY HP
 
STEP 1: EXPORT ALL THE SITEFLOW JOBS AND DELETE ALL COMMERCIAL JOBS
First you will want to stop the System Manager, Pres Controller and RIP services. Then you will want to clear all temp files from the following directories (Some of the temp files won’t delete):
• C:\temp
• C:\Windows\Temp
• S:\Temp
• Empty the Recycle Bin
 
 
To format the image memory: (this is run on the Press Controller)
 
1. Open a CMD prompt by going to Start > Run hit enter
2. Type in CMD and hit enter
3. Type "cd \unicorn\release" and press Enter
4. Type "immudiskformat /nocsdb" and press Enter
5. Type “cd \Indigo” and press Enter
6. Type “restoreIPC.bat
 
To delete the Job History after Formatting Image memory: (This is ran on the System Manager)
 
1. In the same CMD window
2. Type “cd \prodflow\tools\database\utils” and press Enter
3. Type "delete_jobhistory.bat" and press Enter
4. Type "cd \prodflow\tools\backuprestore" and hit Enter
5. Type syncfiles.bat and hit Enter
6. You can now close this box and Start the services in the following order….
a. RIP
b. Press Controller (WAIT FOR PRESS CONTROLLER SERVICE TO START UP)
c. System Manager
7. Reimport the jobs
