# Zebra printer loses its static IP Address
#### This can happen if we lose power, the internet, the printer messes up, etc.
1. Print the config labels by pressing the Pause and X buttons (the leftmost button and the rightmost button)
  - This will print all of the printer information, IP, media size, print quality, etc.
2. Determine what the IP address SHOULD be by troubleshooting the device agent/send to device log/sticker on the physical printer
----
<br />
#### Once you have what the IP address should be, log in to the web interface for the Zebra printer <br />
1. Go to 192.168.{{xxx}}.{{xx}} - Click View and Modify Printer Settings > 1234 or admin for password usually <br />
2. Click on Network Configuration > TCP/IP Settings > Type in the correct IP Address <br />
3. Select IP Protocol > Permanent <br />
4. Click on Submit Changes <br />
5. Go back to Main Menu > Click on View and Modify Printer Settings again > Save Current Configuration <br />
6. After that, power off the printer and turn it back on; it should be the new IP Address assigned. If it still is not printing, attempt #1 from the first note; print the config labels <br />
