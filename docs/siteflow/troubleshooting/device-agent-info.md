# Inspecting Device Agents in SiteFlow/Print OS
## Navigate to Organization Settings, Devices, Agents

If an agent shows a lost connection or is disconnected, there is an issue with the connection.

1. Attempt to restart the device > Startup > Restart in Windows
    If this doesn't fix it, or the device agent states disconnected, a new agent needs to be created
2. Same Spot > Organization Settings > Devices > Agents > Create New
     When it is created, it will generate a security token for you to input on the device that you're connecting it to
3. Go to the device, open the device agent, and input the code. The connection is relatively fast, so in less than a minute, all of the statuses on the agent will be green and ready to receive jobs
4. Once they are green, we need to identify all of the batches sent during the downtime
   - 1. Using Domo send to device logs, events in Siteflow, and looking at the timestamp to determine what to send back
        In my example, the device agent stopped after 10:24 p.m., so I know anything after that time until 10 minutes ago from re-activation will need to be resent. I resent everything stating Tue 13th, 14:48
https://drive.google.com/file/d/1rK2DxKq3bSQhtIcoJHJ32O1j7mnuGElm/view?usp=sharing
