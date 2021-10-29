# Read: 05 - HTML Images; CSS Color & Text

# Duckett HTML book

### Chapter 5: “Images” (pp.94-125)

Images should be licensed and relevant.
- Convey information

**Storing Images On Your Site**

Keep images in a separate folder for organization.

**Adding Images**

``<img>`` Element for images. No closing tag required, but attributes are needed to work.

``src`` Placed in element to tell browser where the image is.

``alt`` Text for image. Should give a good description for screen readers/accesibility reasons.

``title`` Additional image when hovering over image.

e.g. ``<img src="dogpics/doggo.png" alt="A small puppy looking at the camera." title="This dog is just sitting there."/>``

**Height & Width of Images**

``height`` and ``width`` are attributes that can be added to the element in pixels.

**Where to Place Images in Your Code**

This does matter, placing them in front or behind a block element will create a new line, but placing them in an inline can interrupt the line.

**Three Rules for Creating Images**

1. Save in jpeg,gif, or png.
2. Make sure the size is the same as what you want to display on the site.
3. Look at the dimensions in pixels.

**Image Formats: JPEG**

For multiple color photos.

**Image Formats: GIF or PMG**

For simple images with fewer colors, or large spots of the same color.

### Chapter 11: “Color” (pp.246-263)

**Foreground Color**

``color``

Change colors of specific elements via CSS. Changeable via RGB values, HEX code, or actual color names.

**Background Color**

``background-color`` 

This changes the background color, but only of the "box" of each element.

**Contrast**

Manage contrast so things are easier to read.

**CSS3: Opacity**

``opacity`` 0.0 and 1.0, with 1.0 being 100%.

**CSS3: HSL & HSLA**

``hsl`` property for color. Hue, Saturation, Lightness.

Hue: Angle between 0 and 360 on the color wheel.

Saturation: Percentage of grey. 0% is gray, 100% is the color.

Lightness: 0% to 100% from black to white, 50% is the color.

``alpha`` if using ``hsla`` this specifies opacity from 0.0 to 1.0.

### Chapter 12: “Text” (pp.264-299)

**Typeface Terminology**

serif - extra detals on ends of letters

sans-serif - no details with straight ends to letters

monospace - all the same width

weight - how thick/emphasized the font is

style - italics or oblique texts

stretch - how condensed the letters are



### JPEG vs PNG vs GIF — which image format to use and when?


JPEG: Natural colors or photograph (real world).
Lossy, but able to be compressed easily. Photos are better for this because they don't look as bad when compressed. Text and things with sharp contrasting pixels are easier to see the compression and look bad.

PNG: Images that need transparency, images with text, or logos.
Higher resolution lossless. Make for larger file size. Good for text or logos so there is less issues with the sharp edges/contrast.

GIF: Images with animations as PNG is a better lossless format.