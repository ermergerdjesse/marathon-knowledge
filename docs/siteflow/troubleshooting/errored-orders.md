Steps to download RAW customer file
1. Click the picture of the specific component that is errored
2. Click View File
3. Click FETCH URL > View
-Some have a direct download link so when you click file, it will begin downloading so no alarm if it doesn't open a new tab
4. Download the file
5. Open the file in Acrobat
6. Select All Tools
7. Select Use Print Production
8. Select Preflight
9. Select Acrobat Pro DC 2015 Profiles
10. Scroll down to PDF/X
11. Select Verify compliance with PDF/X-4
12. Continue to do a preflight
-List of errors;
Severity 1: Breaks PDF
OutputIntent for PDF/X missing
	PDF/X standards mandate an OutputIntent dictionary specifying the target printing condition (such as FOGRA39 or GRACoL). Without it, automated Raster Image Processors (RIPs) cannot accurately manage color separations, leading to compliance rejections and severe color shifts on press

PDF/X-4 entry missing or incorrect
	The file claims PDF/X-4 conformance, but the required version keys (such as GTS_PDFXVersion in the metadata or document catalog) are invalid, corrupt, or missing. Print workflows requiring strict PDF/X-4 compliance will halt and flag the document as non-compliant

Image is invalid
	An embedded image XObject contains corrupted raw streams, malformed compression filters (like broken DCTDecode or JBIG2 streams), or conflicting header dimensions. Viewers and rendering engines will fail to draw the graphic, resulting in blank rectangles, visual artifacts, or fatal parsing crashes

Font is not embedded/supported
	The document references glyphs without embedding the full font program or subset, or embeds an unsupported/corrupted font format. When opened or processed on a machine lacking that font, the system is forced to substitute it, causing character overlapping, text reflow, missing glyphs (tofu boxes), or complete rendering failures

Severity 2: Okay as is (Warnings)
Creation date mismatch between Document Info and XMP Metadata
	The legacy /CreationDate entry in the PDF Info dictionary differs from the xmp:CreateDate entry in the XMP metadata stream. This is a synchronization oversight caused by an editing tool updating one metadata record but not the other; it has zero impact on visual rendering, printing, or text extraction

Last Modification Date mismatch between Document Info and XMP Metadata
	The /ModDate value in the Info dictionary does not match xmp:ModifyDate in the XMP stream. Like the creation date mismatch, it is purely an archival and metadata hygiene issue that will not break display, RIP processing, or output appearance

13. If you NEED to fix the file, whether it's our own Marathon order, or explaining to a customer how to fix it
-Under the same preflight screen on acrobat, instead of Verifying Compliance, select Convert to PDF/X-4 Coated GRACoL 2006
-Save the file under a different name for a before and after
-IF THIS FAILS, there are workarounds. Use a PDF compressor (Acrobat Online works pretty good) compress it to medium. If this fails, let me know. After compressing, run it through a flattener after. This will fix it. If the error contains image is invalid, nothing can fix it as it is corrupted.
    
Link to video walkthrough - https://drive.google.com/file/d/1hEsODD2d4QqBr9z7kvVkJsu_X5Ho8ra-/view?usp=sharing
