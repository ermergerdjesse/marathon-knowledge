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

### Steps to do a fresh install
1. Log in to Siteflow
2. Open Organization Settings
3. Devices
4. Click + Agent
5. After creating one, find it within the list
6. Click on Agent to get the activation token
7. Input the activation token on the device added to

If it is a newly installed device, you don't need to change any devices pointing to it <br />
If it is replacing a new device and a workflow is already created, change all devices pointing to the new agent

Link to Google Drive showing everything: https://drive.google.com/drive/folders/1ekvOYWprcgyOjcNM-Z4jFuwJ-ijo-jsx?usp=drive_link

### Most Common Errors within Device Agent
1. Someone sent a job to a device that is not properly set up yet; i.e., this job isn't ready to accept this type of job
- Some devices cannot accept certain jobs, such as the press not being able to print the size needed for the most part
