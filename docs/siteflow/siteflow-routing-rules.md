# SiteFlow Component Auto-Send Device Routing

## Overview & Context
SiteFlow permits only one automated send device per component at the workflow level. When an order requires simultaneously dispatching print assets (PDFs) to a press hot folder while delivering metadata (JDF/XML) to an external tracking or bindery system, the native single-device limit creates a bottleneck.

## Symptoms & Failure Points
- The press DFE receives the print file, but downstream bindery scanners fail to locate the job ticket XML.
- If manually duplicated, postbacks register out of sequence, flagging components as "In Production" before RIP processing finishes.
- SiteFlow job status hangs on `Sending to Device` if one network path experiences latency.

## Standard Operating Procedure

### 1. Primary Device Setup
Configure the primary auto-send target directly to the press DFE or RIP intake hot folder:
- **Device Type:** Hot Folder / Direct JDF
- **Payload:** Rendered Production PDF
- **Naming Pattern:** `[Job.Id]_[Component.Code]_[Order.CustomerName].pdf`

### 2. Secondary Payload Distribution
Route metadata payloads via postback webhooks rather than a secondary send device:
1. Navigate to **SiteFlow > Workflows > Device Triggers**.
2. Set the XML output trigger to execute on status change: `PRINT_READY` or `SENT_TO_PRINT`.
3. Target the secondary server path: `\\marathon-nas\prepress_in\siteflow_xml\`.

## Critical Rules & Quirks
- **Never modify token strings:** Do not alter `[Component.Code]` tokens in existing routing paths without verifying barcode scan rules on the Horizon finishing line.
- **Spaces in File Names:** Always enforce underscores over spaces in output templates to prevent JDF parsing errors on HP SmartStream DFEs.

## Why We Do It This Way
Handling the handoff strictly through transition postbacks ensures that asset files and ticket data cannot desynchronize. Direct manual splitting tested in 2024 resulted in orphaned XML files whenever a press RIP was restarted during an active run.
