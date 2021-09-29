# Dynamic web pages with JavaScript

Javascript is a lightweight compiled programming language with **first class functions** that is mostly used in scripting for web pages, as well as other 

**First Class Functions**: This is when you can treat a function as a variable by assigning it to one, meaning you can put it into another function as a variable.

It is a distinct language from Java.

### Input/Output

Name your input ids. This also creates an input text field.

e.g.

variable_1: `<input id="variable_1">`

variable_2: `<input id="variable_2">`

Add a button:

`<button id="button_1">Text on button here</button>`

Example script from code-maven (modified with the above variables) using **getElementById**.

~~~
<script>

function display_variables() {
    var var1 = document.getElementById('variable_1').value;
    var var2 = document.getElementById('variable_2').value;

    var html = 'This is the first variable' + var1 + 'This is the second variable' + var2;

    document.getElementById('display').innerHTML = html;
}

document.getElemenbtById('button_1').addEventListener('click', display_variables);

</script>
~~~

Display using a div in the HTML.

`<div id="result"></div>`


### JS Variables

Three was to describe a JS variable:

- Var
- Let
- Const

Variables are for storing values with the **var** keyword.

~~~

var variable1 = 4;
var variable2 = 5;
var total = variable1 + variable2;

~~~

Var total would be 9.

### JS Identifiers

All JS variables must have unique names, called **identifiers**.

Rules for names:
- Letters, digits, underscores, and dollar signs are okay.
- Must begin with a letter.
- Can also begin with a $ or _
- Are case sensitive
- Some specific JS keywords can't be used as variable names

### Assignment Operator

In JS **=** does not mean equal to, rather it is used to assign values.

x = x + 5 would give the value of "x+5 to x.

In order to use equal to, **==** must be used.

### JS Data Types

JS variables can hold numbers and text.

Text values are called text strings, which can include spaces and sentences if written inside quote. Numbers are not required to use quotes, but will be treated like text if written with quotes.

e.g.

~~~
 var name = "Jane Doe"; 
 ~~~

 ### Creating JS Variables

 Declaring a variable will create it using **var**.

 e.g.

 ~~~
 var name;
 ~~~

 This variable is now created even if it has no value.

 The = sign is what is used to assign a value to the now created variable (see assignment operator above).

e.g. 

 ~~~
 name = "Jane";
 ~~~

 A variable can also be given a variable at its creation.

 e.g.

 ~~~
 var name = "Jane";
 ~~~

 **Good practice tip: Declare all variables at the beginning of a script.**

 A single statement can declare multiple variables when separated by a comma and starting with **var**.

 e.g.

 ~~~
 var firstname = "Jane", lastname = "Doe", variable1 = 6;
 ~~~

 JavaScript will not remove value from a variable if another unvalued declaration comes after the original.

 e.g. 

 ~~~
 var firstname = "Jane";
 var firstname;

 ### JS Arithmetic

Basic math can be done with operators. This can also be used to add strings and spaces in quotes.