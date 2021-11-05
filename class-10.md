# Duckett JS book:

### JavaScript book, Ch. 10, “Error Handling & Debugging”

**Order of Execution**

The way JS is ordered can cause bugs when writing code as there is an order of execution (similar to an order of operations) where things are run.

**Execution Contexts**

JS also runs these within a context or scope for variables, which can also cause bugs if the coder tries to grab something from within a context or scope that is not available to the program.

**The Stack** 

JS goes one line at a time through the "stack" - a conceptual method for understanding how code is "stacked" on top of each other as they are processed.

**Execution Context & Hoisting**

*Hoisting* The script is prepared by creating a scope where variables, functions, and arguments are created. 

*Execution* The script has variables asigned with values, functions are then grabbed and ran, and the script statements are run.

Functions can be called wherever they exist on the code even before they are created on the lines below, but only if they are created with a function declaration vs a function expression.

**Understanding Scope**

Treat functions and variables as if they are within Russian nesting dolls with their variables. Inner functions can get variables from exterior functions, but variables from within are hidden.

**Understanding Errors/Error Objects**

Error objects help the coder find mistakes by showing the following:

``name`` Type of error

``message`` Description

``fileNumber`` Name of JS file

``lineNumber`` Line number where the error is.

The types of errors will help the coder understand what the issue is.

``Error`` Generic.

``SyntaxError`` Improper syntax in code.

``ReferenceError`` Variable is not in scope or missing from code.

``TypeError`` Data type is causing issues.

``RangeError`` Numbers aren't in working range.

``URIError`` For the methods encodeURI(), or decodeURI().

``EvalError`` For the eval() function.

**How to Deal With Errors**

Debugging means going through the script, usually at the line number indicated to find where in the process the JS is breaking down.

Other ways to catch errors are through the use of JS statements:

``try``

``catch``

``throw``

``finally``

These are important to use as these may help catch errors beyond the coder's control. See "Handling Exceptions" below.

**Debugging Workflow**

- Where is the problem?
1. Which script?
2. The line number?
3. Type of error?
4. How far has the code run?
5. Create deliberate breakpoints to see how far the script can go and see exactly what data is where in the process.

Explain the problem to another person or a rubber duck which may help the coder understand the issue.

- What is the problem?

Debugging is about deduction, eliminating errors, and dealing with new ones. It's important to keep a record of things that are being tested.

**Browser Dev Tools & JavaScript Console**

Use the console to find the errors when they don't appear in the coding program.

``console.log()`` can be invaluable for testing code in certain spots.
Giving data to the console throughout the code can help debug.

 Functions can also be written directly into the console to test them.

**Breakpoints**

Script execution can be paused through browser tools which allow the coder to see the variables stored at that specific moment in time.

These breakpoints can be entered in and set to run conditionally as well e.g. "Only if X is < 10" as shown in the book.

**Debugger Keyword**

Breakpoints can be entered in the code as well through the use of ``debugger``. Dev tools must be open as well.

Like the breakpoints above, debugger can be set to be conditional with if statements.

After debugging is finished, breakpoints *must* be removed as they themselves can cause bugs.

**Handling Exceptions**

``try`` - You know this code may not work, but try to run it anyway. If it doesn't, go to ``catch``, ``finally`` or both.

``catch`` - If the ``try`` code block fails, then go the ``catch`` alternate code block. This means if the code doesn't run instead of just ending it will give the user an error they can report.

``finally`` - If the code works or not, the codeblock here will run.

Useful if the code needs to get data from elsewhere and can't due to connection issues or other server problems.

**Throwing Errors**

You can create your own error messages if you are aware a problem may crop up:

``throw new Error('custom error message');``

Useful for:

- JavaScript Object Notation formatting error
- Data that should be numeric but is not (e.g. boolean or string)
- Remote server error
- Information from a set of data missing one value

**Debugging Tips**

- Try another browser
- Add Numbers
- Remove the code so only the bare minimum is there and test what is left over
- Explain the code to someone else or a rubber duck
- Google it
- Try it on replit
- Validation tools

**Common Errors**

*Back to Basics*
- Case sensitivity issues e.g. ``elementByID`` vs ``elementById``.
- Check the variables to see if they were declared properly.
- See if the variable is in scope.
- Make sure a variable is not a reserved word or has a dash.
- Make sure single and double quotes are matched.
- Make sure HTML has unique ID values.

*Missed/Extra Characters*
- Check for missing semi-colons.
- No missing closing braces or parentheses.
- No extra commas where there shouldn't be (possibly from copy-pasting).
- Make sure a script is not missing a paramter for a function.
- "undefined" is for variables, properties, or methods.
- Make sure the script is actually loading.

*Data Type Issues*
- Make sure the right number of = is used. = for assigning variables, == for checking values.
- == vs === (not strict vs type coercion)
- Make sure ``switch`` statements will have all expressions run until the ``break`` or ``return``.
- ``parseInt()`` may need a radix.
