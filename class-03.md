# HTML Lists, Control Flow with JS, and the CSS Box Model

# Duckett HTML

### Chapter 3: “Lists” (pp.62-73)

**Ordered Lists**

``<ol>`` Ordered list element. Will number the list elements in between them.

``<li>Item</li>`` Each item in the list element.

**Unordered Lists**

``<ul>`` Unordered list element. Will bullet point the list elements in between them.

``<li>Item</li>`` Each item in the list element.

**Definition Lists**

``<dl>`` For terms and their definitions. Will list the elements between them.
``<dt>`` The term to be defined.
``<dd>`` The definition.

**Nested Lists**

You can do a sub-list within a list by starting a new ``<ul>`` that is indented further with different bullet styles.

### Chapter 13: “Boxes” (pp.300-329)

**Box Dimensions**

``width`` ``height`` Properties to set the size of the box.

``px`` Direct pixel size 

``50%`` Percentage based sized, relative to the box around it or the window it's in.

``ems`` Text based. Will resize the box based on the text inside of it.

**Limiting Width and Height**

``min-width`` ``max-width`` The smallest and largest width a box can expand or shrink to.

``min-height`` ``max-height`` The smallest and largest height a box can expand or shrink to.

Useful for formatting for mobile devices.

**Overflowing Content**

``overflow`` For when the content of the box is too large for the box itself.

``hidden`` Property for overflow. Extra text is hidden from view.

``scroll`` Property for overlow. The box remains the same, but a scroll bar is added to the side.

**Border-Width**

``border-width`` Property used to control the width of a border.

Uses the following values: ``thin`` ``medium`` ``thick`` or ``px`` for pixels.

Can also adjust the border sides individually with the following: ``border-top-width``, ``border-right-width``, ``border-bottom-width``, ``border-left-width``.

Individual border widths can be done in a single line. e.g. ``border-width: 1px 2px 3px 4px;``

Values are clockwise starting at the top, right, bottom, left.

**Border Style**

Border style can be controlled.

``solid``, ``dotted``, ``dashed``, ``double``, ``groove``, ``ridge``, ``inset``, ``outset``, ``hidden``, ``none``

**Border Color**

``border-color`` with RGB values, color names, or hex values.

**Padding**

Space between the interior of the box and its border.

``padding`` Can use pixels, percentage, or ems.

**Margin**

The space between the boxes themselves.

``margin`` Can use pixels, percentage, or ems.

**Centering Content**

By adjusting margins,box can be made to sit in center of the page.

``margin auto``


# Ducket JS

### Review from Reading 02 - Chapter 2: “Basic JavaScript Instructions” (pp.70-73)

Notes done previously. Reviewed.

### Chapter 4: “Decisions and Loops” from switch statements on (pp.162-182)

**Loops**

Run a specific amount of times: ``for (some thing to be tested) { stuff happens }``

Initialization: ``var i = 0;`` (direct from pg 171 of Ducket JS)

Condition: ``i < 10;`` (direct from pg 171 of Ducket JS)

Update: ``i++`` (direct from pg 171 of Ducket JS)

Run an uncertain amount of times: ``while (some thing to be tested) { stuff happens }``

Run at least once even if some thing to be tested is false: ``do while (some thing to be tested) {stuff happens }``

**Key Loop Concepts**

``break`` terminate loop at that point, go outside loop

``continue`` stop loop, but check the thing to be tested again

