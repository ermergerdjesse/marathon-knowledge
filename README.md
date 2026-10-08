https://drive.google.com/drive/folders/1DYfvohiVcoQZ-FAK5uN6aga-YltrB_vm?usp=sharing

# Formatting sheet for Knowledge center

Various formats that the github site supports (if you want to change anything :) )

------------------------------------------------------------------------

# HEADINGS

``` markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

------------------------------------------------------------------------

# TEXT

### Bold

``` markdown
**Bold text**
__Bold text__
```

**Bold text**

### Italic

``` markdown
*Italic text*
_Italic text_
```

*Italic text*

### Bold + Italic

``` markdown
***Bold and italic***
___Bold and italic___
```

***Bold and italic***

### Strikethrough

``` markdown
~~Strikethrough~~
```

~~Strikethrough~~

### Inline Code

``` markdown
`inline code`
```

`inline code`

### Combining Formatting

``` markdown
**Bold `code`**
***Bold italic***
**Bold and *italic***
~~**Bold strikethrough**~~
```

------------------------------------------------------------------------

# PARAGRAPHS

Separate paragraphs with a blank line:

``` markdown
First paragraph.

Second paragraph.
```

------------------------------------------------------------------------

# LINE BREAKS

Two spaces at the end of a line:

``` markdown
First line  
Second line
```

Or HTML:

``` html
First line<br>
Second line
```

------------------------------------------------------------------------

# BULLET LISTS

``` markdown
- Item
- Item
- Item
```

-   Item
-   Item
-   Item

Alternative markers:

``` markdown
* Item
+ Item
```

------------------------------------------------------------------------

# NESTED BULLET LISTS

``` markdown
- Item
  - Nested item
    - Nested again
- Another item
```

-   Item
    -   Nested item
        -   Nested again
-   Another item

------------------------------------------------------------------------

# NUMBERED LISTS

``` markdown
1. First
2. Second
3. Third
```

1.  First
2.  Second
3.  Third

------------------------------------------------------------------------

# NESTED NUMBERED LISTS

``` markdown
1. First
   1. Nested
   2. Nested
2. Second
```

------------------------------------------------------------------------

# MIXED LISTS

``` markdown
1. First
   - Nested bullet
   - Another bullet
2. Second
   - Nested bullet
```

------------------------------------------------------------------------

# CHECKBOXES / TASK LISTS

``` markdown
- [ ] Not completed
- [x] Completed
```

-   [ ] Not completed
-   [x] Completed

------------------------------------------------------------------------

# LINKS

### Standard Link

``` markdown
[GitHub](https://github.com)
```

[GitHub](https://github.com)

### Link With Title

``` markdown
[GitHub](https://github.com "GitHub website")
```

### Automatic URL

``` markdown
https://github.com
```

### Email

``` markdown
<example@example.com>
```

### Relative Link

Useful for linking to another file in the same repository:

``` markdown
[Another document](docs/example.md)
```

------------------------------------------------------------------------

# IMAGES

### Basic Image

``` markdown
![Alternative text](image.png)
```

### Image From URL

``` markdown
![Alternative text](https://example.com/image.png)
```

### Image With Title

``` markdown
![Alternative text](image.png "Image title")
```

### Clickable Image

``` markdown
[![Alternative text](image.png)](https://example.com)
```

------------------------------------------------------------------------

# CODE BLOCKS

### Basic Code Block

```` markdown
```
code goes here
```
````

### Plain Text

```` markdown
```text
plain text
```
````

### JSON

```` markdown
```json
{
  "name": "Example",
  "enabled": true
}
```
````

### JavaScript

```` markdown
```javascript
const example = "Hello";
```
````

### HTML

```` markdown
```html
<h1>Hello</h1>
```
````

### CSS

```` markdown
```css
.example {
  display: block;
}
```
````

### XML

```` markdown
```xml
<example>
  <value>Hello</value>
</example>
```
````

### Bash / Shell

```` markdown
```bash
echo "Hello"
```
````

### Python

```` markdown
```python
print("Hello")
```
````

The language after the opening backticks controls syntax highlighting.

------------------------------------------------------------------------

# CODE BLOCKS WITH FOUR BACKTICKS

Useful when the code itself contains three backticks:

````` markdown
````markdown
```text
Example
```
````
`````

------------------------------------------------------------------------

# BLOCKQUOTES

``` markdown
> This is a quote.
```

> This is a quote.

### Multi-line Quote

``` markdown
> First line.
> Second line.
> Third line.
```

> First line. Second line. Third line.

### Nested Quote

``` markdown
> First level
>
> > Second level
```

> First level
>
> > Second level

------------------------------------------------------------------------

# GITHUB ALERTS / CALLOUTS

### NOTE

``` markdown
> [!NOTE]
> Additional information.
```

> \[!NOTE\] Additional information.

### TIP

``` markdown
> [!TIP]
> A helpful suggestion.
```

> \[!TIP\] A helpful suggestion.

### IMPORTANT

``` markdown
> [!IMPORTANT]
> Something important to know.
```

> \[!IMPORTANT\] Something important to know.

### WARNING

``` markdown
> [!WARNING]
> Something could go wrong.
```

> \[!WARNING\] Something could go wrong.

### CAUTION

``` markdown
> [!CAUTION]
> An action could have unwanted consequences.
```

> \[!CAUTION\] An action could have unwanted consequences.

------------------------------------------------------------------------

# HORIZONTAL RULES

``` markdown
---
```

------------------------------------------------------------------------

``` markdown
***
```

------------------------------------------------------------------------

``` markdown
___
```

------------------------------------------------------------------------

# TABLES

### Basic Table

``` markdown
| Name | Type | Status |
| --- | --- | --- |
| Item 1 | Type A | Active |
| Item 2 | Type B | Inactive |
```

  Name     Type     Status
  -------- -------- ----------
  Item 1   Type A   Active
  Item 2   Type B   Inactive

### Left Alignment

``` markdown
| Name | Description |
| :--- | :--- |
| Item | Example |
```

### Center Alignment

``` markdown
| Name | Status |
| :---: | :---: |
| Item | Active |
```

### Right Alignment

``` markdown
| Quantity | Price |
| ---: | ---: |
| 10 | $25.00 |
```

### Mixed Alignment

``` markdown
| Left | Center | Right |
| :--- | :---: | ---: |
| A | B | C |
```

### Formatting Inside Tables

``` markdown
| Field | Description |
| --- | --- |
| `itemSku` | **Required** value |
| `status` | *Optional* value |
| [Link](https://github.com) | Link |
```

### Pipe Character Inside a Table

Escape it:

``` markdown
| Formula |
| --- |
| `A \| B` |
```

------------------------------------------------------------------------

# COLLAPSIBLE SECTIONS

GitHub supports HTML `<details>` sections.

### Basic

``` html
<details>
<summary>Click to expand</summary>

Hidden content goes here.

</details>
```

### With Markdown

``` html
<details>
<summary>Click to expand</summary>

## Hidden heading

- Item
- Item

**Bold text**

</details>
```

### Open by Default

``` html
<details open>
<summary>Click to collapse</summary>

Visible by default.

</details>
```

------------------------------------------------------------------------

# FOOTNOTES

``` markdown
This sentence has a footnote.[^1]

[^1]: This is the footnote.
```

Multiple:

``` markdown
First note.[^1]

Second note.[^2]

[^1]: First footnote.
[^2]: Second footnote.
```

------------------------------------------------------------------------

# ESCAPING SPECIAL CHARACTERS

Use `\` before a Markdown character when you want it displayed
literally.

``` markdown
\*Not italic\*

\# Not a heading

\> Not a quote

\- Not a list

\| Not a table separator
```

Common characters:

``` text
\`
\*
\_
\#
\+
\-
\.
\!
\[
\]
\(
\)
\|
\>
```

------------------------------------------------------------------------

# HTML

GitHub Markdown allows some HTML.

### Line Break

``` html
<br>
```

### Horizontal Rule

``` html
<hr>
```

### Superscript

``` html
<sup>superscript</sup>
```

Example: X`<sup>`{=html}2`</sup>`{=html}

### Subscript

``` html
<sub>subscript</sub>
```

Example: H`<sub>`{=html}2`</sub>`{=html}O

### Underline

``` html
<u>Underlined</u>
```

Example: `<u>`{=html}Underlined`</u>`{=html}

### Center

``` html
<p align="center">
Centered text
</p>
```

### Details / Summary

``` html
<details>
<summary>Click here</summary>

Content

</details>
```

Note: GitHub sanitizes HTML, so not every HTML tag or attribute will
work.

------------------------------------------------------------------------

# EMOJI

### Emoji Shortcodes

``` markdown
:smile:
:heart:
:warning:
:white_check_mark:
:x:
:rocket:
:bulb:
:gear:
```

Examples:

:smile:\
:heart:\
:warning:\
:white_check_mark:\
:x:\
:rocket:\
:bulb:\
:gear:

You can also paste Unicode emoji directly:

``` markdown
😀 ✅ ⚠️ 🚀 💡
```

------------------------------------------------------------------------

# AUTOLINKS

A URL can be automatically turned into a link:

``` markdown
https://github.com
```

Email:

``` markdown
someone@example.com
```

Explicit angle-bracket autolink:

``` markdown
<https://github.com>
<someone@example.com>
```

------------------------------------------------------------------------

# MENTIONS

GitHub usernames can be mentioned:

``` markdown
@username
```

Depending on the context, this can notify the user.

------------------------------------------------------------------------

# ISSUE / PULL REQUEST REFERENCES

Within a repository:

``` markdown
#123
```

Cross-repository:

``` markdown
owner/repository#123
```

GitHub can automatically turn these into links.

------------------------------------------------------------------------

# COMMIT REFERENCES

A commit SHA can be referenced:

``` markdown
a1b2c3d
```

GitHub can turn recognized commit references into links.

------------------------------------------------------------------------

# REPOSITORY REFERENCES

``` markdown
owner/repository
```

GitHub can recognize repository references in supported contexts.

------------------------------------------------------------------------

# KEYBOARD KEYS

GitHub supports the HTML `<kbd>` element:

``` html
<kbd>Ctrl</kbd> + <kbd>C</kbd>
```

Example:

`<kbd>`{=html}Ctrl`</kbd>`{=html} + `<kbd>`{=html}C`</kbd>`{=html}

Another:

``` html
<kbd>⌘</kbd> + <kbd>K</kbd>
```

------------------------------------------------------------------------

# DETAILS / SUMMARY

### Collapsed

``` html
<details>
<summary>Show more</summary>

More information.

</details>
```

### Expanded

``` html
<details open>
<summary>Hide information</summary>

Information shown by default.

</details>
```

------------------------------------------------------------------------

# COMMENTS

HTML comments are hidden from the rendered page:

``` html
<!-- This will not appear on the page -->
```

Useful for notes to yourself while editing.

------------------------------------------------------------------------

# SPECIAL TEXT

### Superscript

``` html
X<sup>2</sup>
```

X`<sup>`{=html}2`</sup>`{=html}

### Subscript

``` html
H<sub>2</sub>O
```

H`<sub>`{=html}2`</sub>`{=html}O

### Keyboard Input

``` html
<kbd>Ctrl</kbd> + <kbd>S</kbd>
```

`<kbd>`{=html}Ctrl`</kbd>`{=html} + `<kbd>`{=html}S`</kbd>`{=html}

------------------------------------------------------------------------

# COMBINING FORMATTING

Markdown can be combined:

``` markdown
**Bold `code`**

*Italic `code`*

***Bold italic***

> **Bold quote**

- **Bold item**
- `Code item`
- [Link](https://github.com)
```

------------------------------------------------------------------------

# COMMON DOCUMENT STRUCTURE

A clean GitHub Markdown document can be built like this:

``` markdown
# Main Title

> Short description.

## Overview

Explanation.

## Section

### Subsection

1. Step one.
2. Step two.
3. Step three.

## Example

| Column | Column |
| --- | --- |
| Value | Value |

## Code

```text
Example
```

> \[!NOTE\] Additional information.

```{=html}
<details>
```
```{=html}
<summary>
```
More information
```{=html}
</summary>
```
Additional content.

```{=html}
</details>
```
## Related Links

-   [Link](https://example.com)

```{=html}
<!-- -->
```

    ---

    # QUICK REFERENCE

    | Formatting | Markdown / HTML |
    | --- | --- |
    | Heading 1 | `# Heading` |
    | Heading 2 | `## Heading` |
    | Heading 3 | `### Heading` |
    | Bold | `**text**` |
    | Italic | `*text*` |
    | Bold + italic | `***text***` |
    | Strikethrough | `~~text~~` |
    | Inline code | `` `code` `` |
    | Bullet | `- item` |
    | Numbered list | `1. item` |
    | Checkbox | `- [ ] item` |
    | Checked box | `- [x] item` |
    | Link | `[text](url)` |
    | Image | `![alt](url)` |
    | Quote | `> quote` |
    | Divider | `---` |
    | Table | `\| A \| B \|` |
    | Code block | ```` ``` ```` |
    | Note | `> [!NOTE]` |
    | Tip | `> [!TIP]` |
    | Important | `> [!IMPORTANT]` |
    | Warning | `> [!WARNING]` |
    | Caution | `> [!CAUTION]` |
    | Collapsible | `<details>` |
    | Footnote | `[^1]` |
    | Superscript | `<sup>` |
    | Subscript | `<sub>` |
    | Keyboard key | `<kbd>` |
    | Hidden comment | `<!-- -->` |
    | Emoji | `:emoji_name:` |
    | Mention | `@username` |
    | Issue | `#123` |

    ---

    # CHEAT SHEET: COPY / PASTE

    ```markdown
    # Heading 1
    ## Heading 2
    ### Heading 3

    **Bold**
    *Italic*
    ***Bold italic***
    ~~Strikethrough~~
    `Inline code`

    - Bullet
      - Nested bullet

    1. Number
    2. Number

    - [ ] Unchecked
    - [x] Checked

    [Link](https://example.com)

    ![Image](image.png)

    > Quote

    > [!NOTE]
    > Note

    > [!TIP]
    > Tip

    > [!IMPORTANT]
    > Important

    > [!WARNING]
    > Warning

    > [!CAUTION]
    > Caution

    ---

    | Column 1 | Column 2 |
    | --- | --- |
    | Value | Value |

    ```text
    Code block

```{=html}
<details>
```
```{=html}
<summary>
```
Click to expand
```{=html}
</summary>
```
Hidden content.

```{=html}
</details>
```
This has a footnote.[^1]

`<kbd>`{=html}Ctrl`</kbd>`{=html} + `<kbd>`{=html}C`</kbd>`{=html}

`<sup>`{=html}Superscript`</sup>`{=html}

`<sub>`{=html}Subscript`</sub>`{=html}

```{=html}
<!-- Hidden comment -->
```
\`\`\`

[^1]: Footnote text.
