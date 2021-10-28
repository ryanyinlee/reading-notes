# Pre 201 Readings

# Duckett HTML & CSS

### Introduction (pp.2-11)

HTML and CSS are useful for more than just the people who design and make websites. Anyone tangentially related to working with the web can use it.

HTML: The basics and bones.
CSS: Styling and layout for presentation of the website.

**How People Access the Web**

Browsers: Software used to access websites via links, bookmarks, or actually typing in the address desired. This software is updated constantly, but not by all users all the time, which can limit functionality.

Web Servers: Where the pages of a site are hosted. Most large companies host their own, but smaller sites can be hosted by dedicated hosting server companies.

Devices Used: Not just desktop computers, but tablets, phones, and laptops, all of which have different abilities and requirements.

Screen Readers: Programs for people with visual impairments. These allow pages to be accessible to more people, but can also be used in other ways where it's not easy to read.

**How Websites Are Created**

What You See: Websites are usually interpreted from their HTML, and CSS code. Sometimes with JavaScript as well. They can have other content such as images, audio, or video.

How It Is Created: Smaller websites just use CSS or HTML. More complex websites may have more advanced functionality, but are in fact just creating more HTML and CSS in different arrangements for browsers to interpret.

HTML5 & CSS3: These are newer versions of HTML and CSS, as these are both continuously being upgraded and developed. Learning earlier versions of these languages should assist in learning these newer ones.

**How the Web Works**

1. ISP > Enter in domain name or web address in browser.
2. DNS finds IP address associated with web address.
3. Unique number from DNS Server lets computer directly connect to web server.

### HTML Chapter 1: “Structure” (pp.12-39)

**How Pages Use Structure**

Structure of a web pages will often mimic their hardcopy counterparts. Newspapers with articles, or insurance forms that must be filled out.

**Structuring Word Documents**

Documents use headings and subheadings to give the information a hierarchy. Large headings which describe the colection of sub-headings within a longer article, and subheadings to break up longer articles.

**HTML Describes the Structure of Pages**

We use HTML to create similar structure that might appear in WYSIWYG word processor through code, using headings, text, and subheadings as an example.

HTML uses elements, usually made up of two tags, an open and a close that affects the code or text in between them.

**HTML Uses Elements to Describe the Structure of Pages**

``<html> </html>`` - Everything in between these is HTML.

``<body> </body>`` - Everthything between these should show up in the main browser window.

``<h1> </h1>`` - Main heading.

``<p> </p>`` - Paragraph between these.

Tags act as containers. They use open and close angle brackets to enclose them, and as slash to indicate an ending tag.

**Attributes Tell Us More About Elements**

Two parts: name, and a value. e.g. ``<p lang="en-us">`` lang is the name of an attribute, while en-us is the value of it.


### HTML Chapter 8: “Extra Markup” (p.176-199)

**DocTypes**
Declare which version of HTML is being used. Helps browsers render pages correctly.

**Comments in HTML**

Comment using: ``<!--- comment in here --> `` Not visible in browser, but can be read in the code. Useful for organization, explanation, or reminders.

**ID Attribute**

Give an HTML element a unique id attribute which helps pull CSS and style it differently from other, regular HTML attributes.

``<p id="unique1">`` 

**Class Attributes**

Like above, except this works with several elements in combination with CSS.

**Block vs Inline Elements**

Some elements will start a new line, others will continue on the same line as other elements.

``<div>`` and ``<span>`` let you group these either as a block or inline.

``<iframes>`` A little window in your webpage for other pages.

``<meta>`` Store information about your page.

Escape characters are necessary for certain characters to be displayed properly and not become code accidentally.

### HTML Chapter 17: “HTML5 Layout” (pp.428-451)

**New HTML5 Layout Elements**

Very similar, with several ``<div>`` elements being replaced.

Code is a bit clearer. 

### HTML Chapter 18: “Process & Design” (pp.452-475)

- Understand your audience.
- Organize and present information so audience can find what they need.

**Who is the site for?**

Think about the target audience. Are they individuals or corporations?

**What your visitors are trying to achieve**

What do they want to do when they actually get here?

**What information your visitors need**

We have the who and what, now how do they get it?

**How often people will visit your site**

Is the information or service you provide static or constantly being updated?

Users should know how often updates are due, and where on the site.

**Site Maps**

An organizational method using a diagram of the pages arranged into groups. Start with a home page.

**Wireframes**

A simple sketch of the page being designed. Very simple, no colors, font, background, etc. Just what needs to be there. Focus on functionality vs looks.

**Visual Hierarchy**

Size, color, style help guide users who are mostly skimming a web page.

**Grouping and Similarity**

Group related information. Be consistent.

# Ducket JS

### Introduction

**JavaScript Makes Web Pages more Interactive**

JS selects any HTML attribute.
JS modifies, adds, or removes content to a page.
JS can be given steps to follow.
JS can react to events.

**Examples**

Slideshows, forms, reload just one section of a page, filter data.

### JS Chapter 1: “The ABC of Programming” (pp.11-52)

**A Script Is a Series of Instructions**

Make a computer achieve a goal. 

They are step by step instructions, but not all of them need to be used, and they can react to what is input rather than running through their entirety each time.

**Writing a Script**

State goal.
List the tasks necessary.
Then code each task.

**Designing a Script: Tasks**

Flowcharts can be created once the goal is known. 

Each task can be broken down into steps. These steps can become code.

**Computers Create Models of the World Using Data**

Objects (Things): Can have properties, events, methods.

Properties (Characteristics): Details about the object that define it.

Events: A triggered reaction to something done by the user that activates a section of code.

**Methods**

Questions and instructions for the object that can give you stored information on it, and/or change it.

**How to use Objects and Methods**

From page 50 of Ducket's JS, the example below breaks down the object and method being called.

``document.write('Good afternoon!');``

Document is the object - represents the page.

Use the . between document and write() to access that document's write() method.

The write() method is for adding content where the ``<script>`` (for the JavaScript) is in the HTML.

The 'Good Afternoon' in the method parentheses is additional information for the method that is sometimes needed.
