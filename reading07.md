#  Programming with JavaScript

### Expressions and operators

JS uses *binary* and *unary* operators, as well as one ternary operator.

**Binary**: Uses two operands, before and after the operator.

e.g. The + operator needs the 3 and 4

~~~
3+4
~~~

**Unary**: Just needs a single operand, either before or after the operator.

e.g. The ++ additional operator can be before or after.
~~~
x++ or ++x
~~~

### Types of Operators

**Assignment**: Gives a value to its left operand using the right operand. Usually uses an = sign to assign.

e.g. 

~~~
x = y means y is now the value of x
~~~

**Comparison**

Compares operands ands works if the comparison is true. 

**==** - Will convert strings to numerical values if possible.
Return *true* if equal.

**=!** - Will convert strings to numerical values if possible.
Return *true* if not-equal.

**==!** or **===** - Will strictly compare operands. Must be equal or not equal of the same type of variable.

**>** or **<** Compares greater than or less than. 

**>=** or **<=** Greater than or equal to and less than or equal to.

**Arithmetic**

Operators that do math. 
`+` Addition

`-` Subtraction

`*` Multiplication

`/` Division

`%` Remainder (gives remainder when dividing two operands)

`++` Adds one to operand. Putting behind the operand sets the variable to the one after it. Putting in front of the operand returns the original operand, then adds one.

`--` Subtracts one to operand. Sub or prefix works the same as above.

`-` When used as a unary operator makes it negative.

`+` When used as a unary operator, converts operand to a number.

`**` Exponent operator. Base `**` exponent is the same as base^exponent.

**Bitwise**

Treats the operands as a set of bits rather than regular numbers. Supposed to be much faster for most computers to run.

This one is a bit more complex, but basically it changes the 1s and 0s.


**Logical**

These use logical boolean values (true or false).

`&&` The AND operator. If both operands are true, returns true, otherwise returns false. If not using boolean values, it will return the first operand if it is false. If the first is true, it will return the second operand.
`||` The OR operator. If at least one operand is true, returns true. If both are false, then returns false. This will return the second operand if first operand is false, or will return the first operand if the first operand is true.
`!` The NOT operator. Unary. If its operand can be converted to true, returns false. If it can't, it returns true.

**String**

Use the `+` to help concatenate strings together. Also works with variables.

**Conditional (ternary)**

The only operator in JS that uses three operands. Uses a `?` and a `:`.

e.g.
~~~
condition ? operand1 : operand2
~~~

If the condition is true, operand1 is selected. Otherwise operand2.

**Comma**

Used mostly in **for** loops so multiple variables can be updated in the loop parentheses. 

Also used for creating arrays.

**Relational**: Compares operands and returns a boolean.

**in**

Returns true if the property is in the object. Useful for arrays.

**instanceof** 

Confirms if the object is the correct type.

**Unary Operators**: Operation with one operand

**delete** 

Removes the property from the object and gives a true return if possible, or false if not (in something that can't be configured).

**typeof**

Returns the operands property as a result. Functions, strings, numbers, objects, boolean, etc.

**void**

Makes an operand undefined, where that is desired.



### Order of Operations

There is an order of operations that is followed when using operators. Best to check JS reference if making something complex.

# Functions

Functions are basically little code blocks that are created with a name and then executed whenever that name is called.

Creating a function does not execute it, it must be called.

Variables inside a function are unique to that function, but a function can also use global variables.

Functions can call themselves (and should have a stop to prevent infinite recursion).

Functions can be nested. The inner function can use the variables and arguments of the outer function, but the outer function can't "see" into the inner function.

Variables should be named differently for this reason as it can cause name conflicts.

While functions can be created, there are a lot of useful pre-defined functions built into JS.

# Control FLow

This is the order in which a program is executed by a computer.

It's usually run from the first line to the last, unless interrupted by loops or other conditions (such as if or else).


