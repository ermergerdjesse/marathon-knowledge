# Server - PowerEdge RAID Identifying Individual Hard Drives - v1.0
## Documentation Overview: This document describes how to use PERC CLI (PowerEdge RAIDController Command Line Interface) to help identify hard drive information in a RAID.
### Permissions: Administrator
#### Software/Hardware Needed: CMD, PERC CLI (x64)
##### Procedures
###### GUI Interface:
1. Install “Windows PERCCLI Utility For All PERC Controllers” from the DELL website, and runthe .exe file on the server.
 - Make note of the file location where the ultility downloads (should beC:\Dell\Drivers\1XC7Y\Windows\perccli64.exe)
2. Run CMD as an Administrator
3. Run: “C:\Dell\Drivers\1XC7Y\Windows\perccli64.exe /c0 show”
4. Locate the section titled “Physical Drives = #” to find information about the RAID such as thetotal amount drives, the size, the models, etc.
5. Type “exit” + Enter
---
##### SSH Interface: System/Tool  
PowerEdge RAID  
1. Run CMD
2. SSH into the server using: “ssh root@<Server IP Address>”
3. Run: “perccli64 /c0 show"
4. Locate the section titled “Physical Drives = #” to find information about the RAID such as thetotal amount drives, the size, the models, etc.
5. Type “exit” + Enter
---
GUI Interface Code/Scripts:  
C:\Dell\Drivers\1XC7Y\Windows\perccli64.exe /c0 show  
SSH Interface Code/Scripts:  
ssh root@<Server IP Address>  
perccli64 /c0 show  
