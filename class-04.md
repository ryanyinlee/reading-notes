# Duckett HTML book:

### Chapter 4: Ch.4 “Links” (pp.74-93)

**Linking**

``<a>`` Link to a website using the ``href`` attribute.

e.g. ``<a href="google.com>Google.com</a>``

When linking between pages on the same site/server/folder, ``href`` can just refer to the page file name directly as a relative ``href``.

e.g. ``<a href="index.html">Home</a>``

**Directory Structure**

Organization of folders and pages can help when designing and building larger websites.

**Relative URLs**

Same folder: File name is fine e.g. ``<a href="index.html">Home</a>``

Child Folder: ``<a href="home/index.html">Home</a>``

Grandchild Folder: ``<a href="test/home/index.html">Home</a>``

Parent Folder: ``<a href="../index.html">Home</a>`` The ``../`` indicates folder above current.

Grandparnet Folder: ``<a href="../../index.html">Home</a>`` The ``../../`` indicates two folders above current.

**Email Links**

Opens up email program and fills in the to field:

``<a href="mailto:realperson@realdomain.com">Email This Guy</a>``

**Opening Links in a New Window**

Forces a new windwo to open by using ``_blank``.

e.g. ``<a href="google.com target="_blank">Google.com</a>``

**Linking to a Specific Part of the Same Page**

Give ID attribute to a part of the page.

Link using that ID attribute with a # to have the link jump to that attribute on the page.


### Chapter 15: “Layout” (pp.358-404)

**Normal Flow**

Standard flow of elements without modification.

**Relative Positioning**

Adjusted by CSS file. Movement is based off of position where it would have been under Normal Flow.

**Absolute Positioning**

The other elements will no longer "wiggle" around an element with absolute positioning. It is no longer in the flow.

**Fixed Positioning**

When fixed the position of the element will stay in the browser window and never move, even as the user scrolls.

**Overlapping Elements**

Use ``Z-index:`` to change the overlap of elements and bring some items back or forward.

Higher numbers are closer to the user.

**Floating Elements**

``float`` will make an element go all the way in one direction and other elements will flow around it.


# Duckett JS book:

### Chapter 3 (first part): “Functions, Methods, and Objects” (pp.86-99 ONLY)

**What is a Function?**

A group of statements that do a specific task that can be moved around and re-used and called.

**Declaring a Function**

``function`` - keyword

``takeNotes()`` - name, and how you call it

``{code}`` - actual code taht runs when you call the function


e.g. ``function takeNotes() {``
    ``console.log("Take notes.");``
``}``

**Calling a Function**

Just need to write the function name with the parentheses (and maybe put some input in the parentheses).

``takeNotes();`` or ``takeNotes(variable);``

**Declaring Functions That Need Information**

Sometimes functions need *parameters*. These can be dropped directly into a function and will give similar results as dropping in variables called from elsewhere.

**Getting a Single Value Out of a Function**

Use the ``return`` keyword to get back a value you can assign to a variable and use.

**Getting Multiple Values Out of a Function**

By creating variables within the function and using an array, a function can return multiple values as long as it is returned to an array.

### Article: “6 Reasons for Pair Programming”