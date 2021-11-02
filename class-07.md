# Domain Modeling

Create a model in code for a problem.

```
var EpicFailVideo = function(epicRating, hasAnimals) {
  this.epicRating = epicRating;
  this.hasAnimals = hasAnimals;
}

var parkourFail = new EpicFailVideo(7, false);
var corgiFail = new EpicFailVideo(4, true);

console.log(parkourFail);
console.log(corgiFail);
```

**constructor function** defined by **function expression**

``new`` instantiated the function

Initialied by calling the constructor function

Stored in a variable for later use.

``this`` required for accessing an object's properties from within




# Duckett HTML book:

### Chapter 6: “Tables” (pp.126-145)

A table is for representing information in a grid with rows and cells.

**Basic Table Structure** 

``<table>`` Element used to create table.

``<tr>`` Creates a row.

``<td>`` Creates a cell in the rows.

e.g.

```
<table>
<tr>
    <td>info1</td>
    <td>info2</td>
</tr>
<tr>
    <td>info3</td>
    <td>info4</td>
</tr>
<table>
```

**Table Headings**

``<th>`` Represents the headint for a column or row.

use ``th scope="row">`` for rows and ``th scope="col">`` for columns.

**Spanning Columns/Rows**

Use ``<td colspan="2">`` to span columns (2 cells)
Use ``<td rowspan="3">`` to span rows (3 cells)

**Long Tables**

``<thead>`` Headings of the table.

``<tbody>`` Body of the table. Has ``<tr>``, ``<td>``, data, etc

``<tfoot>`` Footer of the table.


# Duckett JS Book:

### Chapter 3: “Functions, Methods, and Objects” (pp.106-144)

**Creating an Object: Construction Notation**

``new`` keyword with ``Object()`` e.g. `` var hotel = new Object() ``

Add properties with dot notation.

```
hotel.name = "Best Western";
hotel.rooms = 35;
hote.rating = 4.3;

hotel.checkRating = function() {
    return. this.rating;
}
```

**Updating an Object**

Dot notation or square brackets to update for objects created with literal or constructor notation. 

``hotel.name = "Even More Bester Western Plus";``

``hote['name'] = "Even More Bester Western Plus";``

``delete`` will also delete a property.

``delete hotel.name`` or set it to a blank string.

**Creating Many Objects: Constructor Notation**

Create a function as a template for creating objects.

```
function Hotel(name, rooms, rating) {
    this.name = name;
    this.rooms = rooms;
    this.rating = rating;

    this.checkRating = function() {
        return this.rating;
    }
}
```

Then make instances with ``new`` stored in ``var``.

e.g. ``var spaceHotel = new Hote(`Space`, 35, 4.5);``

**Adding and Removing Properties**

It's possible to add properties.

e.g. 
```
var pool = document.getElementById('pool');
pool.className = hotel.pool;
```

**This (It Is A Keyword)**

Used inside functions & objects.

**Document Object Model: The Document Object**

Document Object - web page that is loaded.

Properties:

``document.title`` - Title

``document.LastModiified`` - Date last modified

``document.URL`` - String with URL of document.

``document.domain`` - Domain of document.

Methods for updating content of page:

``document.write();`` - Write text

``document.getElementById();`` - Returns element with value if ID attribute

``document.querySelectorAll():`` - List of elements that match a CSS selector

``document.createElement();`` - New element

``document.createTextNode();`` - New text node