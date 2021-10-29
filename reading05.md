# Design web pages with CSS

### What is CSS?

CSS are Cascading Style Sheets. This language will make your HTML look nice with a simple syntax system.

### What is CSS for?

**Document**: Structured text file, usually with HTML, but also with markup languages such as SVG or XML.

CSS is **presented** to a form readable by users, usually through a web browser, but can also be seen through other **user agents**.

### CSS Syntax

CSS is rule based where the coder creates a style which is applied across the elements specified. 

It starts with a selector (this time for HTML).

~~~~
h1
~~~~

Then usees curly braces to encapsulate the **declarations** which have the following:

**Property**: The property being adjusted
**Value**: The value of the property to be adjusted to

e.g.
~~~~
color: red;
~~~~~


Color is the property and red is the value.

Check [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) for properties and values.

### CSS Modules

CSS is broken down into modules. These modules affect different areas, such as the **Backgrounds and Borders** module which affects backgrounds and borders.

### How to add CSS

Browsers will format an HTML document based off of a style sheet.

There are three ways of inserting a style sheet:
### 1) External

A single file that is referenced through the HTML.

The external document can be written with a text editor as long as it's saved with a .css extension.

### 2) Internal

Internal stylesheets are actually within the HTML document in the following HTML element.

~~~~
`<style>`
`body {background-color: blue;}`
`</style>`
~~~~

### 3) Inline

Inline is useful if you only need to apply a single style to a single element.

This can be added directly in the HTML element using CSS properties.

e.g.
~~~~
`<h1 style ="color:blue>Inline CSS Heading</h1>`
~~~~

### Multiple Style Sheets

If you have multiple style sheets, then the "latest" style sheet is the one that will be used. 

e.g. If an internal style sheet is referenced after the external style sheet in the HTML structure, the internal style sheet will be the CSS style applied.


### Cascading Order

When there are multiple styles specified for an HTML element they will "cascade" together into an order of operations that follows as such (with one being highest overriding priority):

1) Inline Style 
2) External and internal style sheets
3) Browser default

### CSS Color

Change colors of different elements using basic colors or hexadecimal color values.

Colors can be specified via:

- Hexadecimal values
- Hexadecimal values with transparency
- RGB
- RGBA (Alpha, specifies opacity 0.0 Transparent to 1.0 Fully Opaque)
- HSL (Hue, Saturation, Lightness)
    Hue is a degree on a color wheel (0, 360), with saturation being a percentage shade of the color).
- HSLA (Alpha, specifies opacity)
- Cross-browser color names
- `current color` keyword

Hexadecimal is specified with ##RRGGBB values between 00 and FF.

### CSS Color Syntax

*color* Speciifes the color.
*initial* Sets to default.
*inherit* Sets to inherit property from parent element.