# Duckett HTML book:

### Chapter 7: “Forms” (p.144-175)

**Form Controls**

Adding Text: Text Input, Password, Text Area

Making Choices: Radio Buttons, Checkboxes, Drop-Down Boxes

Submitting Forms: Submit Buttons, Image Buttons, Uploading Files

**How Forms Work**

Information input by user is sent to server, which is processed or stored, then a response is given to the user.

**Form Structure**

``<form>`` HTML element

``<action>`` URL entered will receive the input from form

``<method>`` *get* or *post* 

get: short forms, retrieving data (not inputting)

post: upload a file, long piece of data, passwords, add or remove info form a database

``<id>`` identify the form for the scripts being used

**Text Input**

``<input>`` element to receive text

use ``type=text"``, ``name`` for what the attribute is and ``maxlength`` to limit characters.

e.g. ``<input type="text name="birthyear" maxlength="4">``


**Password Input**

``<input>`` element to receive text

use ``type="password"`` name and maxlength again.

**Text Area**

``<textarea>`` element that creates a multi line input for text with an opening and closing tag. CSS is used to control the size of the box.

**Radio Button**

``<input>`` element

use ``type="radio"`` to make a radio button. Name to send to server, and ``value`` to send to server the option. 

``checked`` will select a value by default (only one should be chosen)

e.g. ``<input type="radio" name="2choices" value="yes" checked="checked" />``

**Checkbox**

``<input>`` element

use ``type="checkbox"``, with ``name``, ``value`` and ``checked`` if a value should be checked when loaded.

e.g. ``<input type="checkbox" name="agree" value="yes"/>``

**Drop Down List Box**

``<select>`` for dropdown list box. Use ``name`` to identify. 

fill with ``<option>`` elements with the ``value`` attribute.

``selected`` will choose a default when page is loaded

e.g. 

```
<select name ="hats">
<option value="bowler">Bowler Hat</option>
<option value="top">Top Hat</option>
<option value="baseball">Baseball Hat</option>
</select>
```

**Submit Button**

``<input>`` but ``type="submit"``, with ``name`` and ``value`` (which will write on the button) 

**Image Button**

An image can be used as a button. Use ``type=image"``. Works similarly to ``<img>`` element.

**Grouping Form Elements**

Use ``<fieldset>`` as an element with a closing tag.. ``<legend>`` for the caption

**HTML 5 Form Validation**

Can validate form entry with HTML features.

``type="date"`` for date format

``type="email"`` for emails

``type="url"`` for URLs



### Chapter 14: “Lists, Tables & Forms” (pp.330-357)

**Bullet Point Styles**

CSS property.

For ``<ul>`` you can use ``none``, ``disc``, ``circle``, or ``square``.

For ``<ol>`` you can use ``decimal``, ``decimal-leading-zero``, ``lower-alpha``, ``upper-alpha``, ``lower-roman``, ``upper-roman``

, and ``<li>`` elements

**Table Properties**

``width`` width

``padding`` space between border of table and content

``text-transform`` content of headers to uppercase

``letter-spacing`` and ``font-size`` styling for table contents

``border-top`` and ``border-bottom`` for table borders

``text-align`` line up text within tables

``background-color`` color background of tables

``:hover`` make table row highlight (useful for big tables to read easier)


# Duckett JS book:

### Chapter 6: “Events” (pp.243-292)

**Different Event Types**

UI Events
``load`` page finished loading

``unload`` page is unloading as a new page is loading

``error`` JavaScript or other error

``resize`` browser window is resized

``scroll`` user scrolls

Keyboard Events

``keydown`` user keypress

``keyup`` user releases the key

``keypress`` while characters are being typed

Mouse Events

``click`` press and release button

``dblclick`` doubleclick on button

``mousedown`` presses a mouse button over element

``mouseup`` releases mousebutton over element

``mousemove`` moves the mouse

``mouseover`` mouse over element

``mouseout`` mouse off an element

Focus Events

``focus/focusin`` element gains focus

``blur/focusout`` element loses focus

Form Events

``input``value an input has changed

``change`` value in box, checkbox, or radio button changes

``submit`` user hits submit on a form

``reset`` user hits reset button

``cut`` user cuts from a form

``copy`` user copies from a form

``paste`` user pastes into a form

``select`` user selects text from a form

Mutation Events

`


