# Basics of HTML, CSS & JS

# Duckett HTML

### Chapter 2: “Text” (pp.40-61)

Headings: HTML has 6 types of headings, from 1 to 6, 6 being the lowest level subheading.

e.g. ``<h1>Main heading</h1>``

Paragraphs: How you can distinctly chunk blocks of text to make it more readable.

e.g. ``<p>Bunch of text, possibly a couple sentences that will be displayed in paragraph form. </p>``

These will be given space between paragraph lines by the browser when displayed.

Bold: Thicker text.

e.g.  ``<b>This will be bolded. </b>``

Italic: Italicized text.

e.g.  ``<i>This will be italicized. </i>``

Superscript: Useful for characters that are superscripted, such as powers in numbers.

e.g. ``4<sup>2</sup>`` to display 4^2.

Subscript: Useful for characters that must be subscripted.

e.g. ``H<sub>2</sub>O`` would display the chemical symbol for water properly.

**White Space** HTML when read in browsers will collapse white space in code automatically. This means you can add a lot of space to make code easier to read and it won't affect how it actually looks when processed.

Line Breaks: Adds a line break wherever inserted.

e.g. ``<br />`` 

Horizontal Rules (i.e. a Line Break): Adds an actual line to separate text.

e.g. ``<hr />``

**Semantic Markup**

Not necessarily for structure, but give information to things like screen readers.

``<strong>`` Gives more importance to these words. Browsers will show it as bold.

``<em>`` Gives more emphasis, but not as emphatically. Browsers will show it as italic.

``<blockquote>`` Creates an indented quotation box. Screen readers or search engines will read this differently.

``<quote>`` Can create quotes around text in a paragraph (but will not work with IE)

Both quote systems can work with built in ``cite attribute``.

``<abbr>`` When used with an abbreviation, will give the full form when hovered over.

``<ins>`` Inserted text shown as underlined.

``<del>`` Deleted text, shown as a strikethrough.

``<s>`` Also strikethrough, but not supposed to be deleted.

### Chapter 10: Ch.10 “Introducing CSS” (pp.226-245)

CSS changes how HTML elements appear through the use of rules that can apply to all of one element, or just be specific to one section or line.

CSS works in boxes per element, with rules assigned per box. 

The rules assigned are appended to the HTML elements themselves using a *selector*, which choses the HTML element, and then the *declaration* which changes the selected HTML element according to a property and a value.

e.g. from pg 231 of Ducket 

`` p { font-family: Arial;} `` This would change the ``<p>`` element with the Arial font.

Multiple declarations can go into the curly brackets separated by a semi-colon.

**External vs Internal CSS**

CSS can be put in a separate file or within the HTML. Separate is nicer simply for the organizational structure, and it can be referenced by multiple pages, keeping the style of a website consistent.

In the ``<head>``, you would write:
(From pg 235 of Ducket)
``<link href="css/styles.css" type="text/css" rel="stylesheet" />``
href: references the path to the file itself
type: what type of file is being referenced
rel: what the file will be used for when referenced

Internal CSS: Internal is built into ``<style>``. If the site is only one page then a separate stylesheet may be unnecessary.

**CSS Selectors**

Universal, Type, Class, ID, Child, Descendant, Adjacent, General.

<br/><br/>



# Duckett JS 

### Chapter 2: “Basic JavaScript Instructions” (pp.53-84)

**Statments**

Statements are commands to the program, ending in a semicolon, usually one per line.

They can be organized into "code blocks" through the use of curly braces that group smaller statements for more complex statements.

**Comments**

JS can be commented with ``/* Comment text in here */`` the slash and asterisk combination.

Can also comment a single line with just the double slash, or ``//``.

**What is a Variable?**

For temporary storage of information, variables are used by JS.

They must first be declared using a keyword (var is used here), and then the variable must be named (quantity is used here).

(from pg 60 Ducket JS)

e.g. ``var quantity;`` 

With the variable declared, it can now be given a value.

**Data Types**

Numeric - Numbers can be stored.

String - Text can be stored.

Boolean - True or False only. 

**Creating Variables**

``var score = 45;`` Declare variable and assign simultaenously.

---

``var score;`` Declare variable

``score = 18;`` Assign value to variable after.

---

**Variable Naming Rules**

Names must start with a letter, dollar sign, or an underscore. Can not start with a number. Can not use a period or dash in the name. Keywords and reserved words can't be used. They are case sensitive. When using multiple words, use camel case or an underscore.

**Arrays**

A variable that holds a list of values instead of just one.

Created similar to creating a variable except with the use of square brackets and commas to differentiate the separate array data.

``var cars;`` <br />
``cars = ['toyota', 'ford', 'bmw'];``

or 

``var cars = new Array('toyota', 'ford', 'bmw');``

**Values and Accessing Arrays**

Arrays are indexed and numbered starting from 0, and you can call the data by using the array number. Calling 1 would get us 'ford'.

Using that number we can also change the data in that particular spot in the array.

``cars[1] = 'subaru';``

**Expressions and Operators**

Assignment: = 
Arithmetic: Basic Math (*, /, +, -)
String: Combine or concatenate strings.
Comparison: Compare two values and return true or false. (boolean)
Logical: Compare expressions and combine to return true or false.

**Arithmetic Operators**

+, -: Add/subtract.
*, /: Multiply, divide.
++: Add one.
--: Subtract one.
%: Modulus. Divide the two values and return the remainder.

### Chapter 4: “Decisions and Loops” only up to the section on switch statements (pp.145-162)

**Comparison Operators**

Give true or false, and when strict will also compare data types. 

``==`` Equal to.

``!=`` Not equal to.

``===`` Strict equal to.

``!==`` Strict not equal to.

``>`` or ``<`` Greater than or less than.

``>=`` or ``<=`` Greater than or equal to or less than or equal to.

These should be structured so the operator is in between two operands being compared.

e.g. ``value1 !== value2;``

**Logical Operators**


``&&`` Logical And. Do both operands return as true when the operands are both comparison operators and can return true or false.

``||`` Logical Or. Only needs to confirm one operand is true to return true.

``!`` Not. Inverts a boolean value very simply.

**If Statements**

An if statement checks a comparison and if it returns true, will execute further code.

e.g. ``if (value1 > 5) {``<br>
    ``Does stuff in here.``<br>
``}``

**If Else Statements**

Similar to above, but has Else appended to the statement which runs if the if is not satisfied.

e.g. ``if (value1 > 5) {``<br>
    ``Does stuff in here.``<br>
``}``<br>
``else {``<br>
    ``Does this instead``<br>
``}``

**Switch Statements**

A switch statement starts with the *switch value*, with multiple possible values, and several cases that would run for that particular value.

