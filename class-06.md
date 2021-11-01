# Understanding The Problem Domain Is The Hardest Part Of Programming

Code is written by putting together components to form the overall program.

Understanding the overall problem domain makes it easier to write better code.

**What can you do about it?**

You can make programming easier by:

Make the problem domain easier

Understand the the problem domain better.

Narrowing your focus can help solve a roadblock.

**How to Solve Programming Problems**

Gives instructions on how to solve a programming problem using 6 steps. Quoted directly:

"**A simple set of steps**

1. Read the problem completely twice.
2. Solve the problem manually with 3 sets of sample data.
3. Optimize the manual steps.
4. Write the manual steps as comments or pseudo-code.
5. Replace the comments or pseudo-code with real code.
6. Optimize the real code."


Understanding before coding will help a lot.


Quoted directly:

"...understanding the problem is the most critical piece to the equation."

"It is very difficult to solve a problem before you know the question."


# What’s the Difference Between Primitive Values and Object References in JavaScript?

**primitive values**

- boolean
- null
- undefined
- number
- bigint
- string 
- symbol
- objects



**object references**

**What JS data types fall into each category**

**Difference between a value and a reference**

primitive value assigned to a value it is directly that value

when a variable is a assigned with an object, it's actually just referencing the location to the memory where that object is

**Difference between immutable and mutable data**

*primitive values* are immutable. Once the var is set, it can't be changed unless the var is re-assigned. 

*object references* are mutable. An array is mutable as you can change the data without re-assigning them.



# Duckett JS book:

### Chapter 3: “Object Literals” (pp.100-105)

**What Is An Object?**

A set of variables and functions. 

Variables are now properties of the object.

Functions are now methods related with the object.

**Creating An Object: Literal Notation**

example from book:

```
var hotel = {
    name: Best Western
    rooms: 35
   booked: 19
    checkAvailability: function() {
        return this.rooms-this.booked;
    }
}
```

**Accesing an Object and Dot Notation**

Use dot notation to access object properties or methods.

e.g ```var hotelName = hotel.name;```

Can also use brackets.

e.g. ```var hotelName = hotel['name'];``` useful for special chars in property name, numbers in property name, variable in property name.

### Chapter 5: “Document Object Model” (pp.183-242)

**The Dom Tree is a Model of a Web page**

DOM Tree - Model of the page code.

- document nodes 
HTML doc
- element nodes
Elements found to be accessed.
- attribute nodes

- text nodes

**Accessing Elements**

``getElementById(`id`);  HTML element needs id first

``querySelector('css selector');`` select first matching css element

``getElementsByClassName('class');`` selects elements by class

``getElementsByTagName('tagName');`` selects elkements with tag

``querySelectorAll('css selector');`` CSS selector syntax match

**Nodelists: DOM Querie That Return More Than One Element**

Collection of element nodes. Appear in same order as in HTML.

Can select one or loop through like an array.

length - length of nodelist

item() - get specific node from nodelist

**Access & Update Text With Textcontent (& InnterText)**

``textContent`` - collect or update the content of the element

``innerText`` - avoid!


**Adding or Removing HTML Content**

``innerHTML`` - Retrive and replace content (add or remove).

**XSS Attacks**

Security issues arise when using innerHTML as it allows for attackers to compromise websites.