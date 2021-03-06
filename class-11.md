# Reading 11 - Audio, Video, Images

# Duckett HTML book:

### Chapter 16: “Images” (pp.406-427)

**Controlling Size of Images in CSS**

``width`` and ``height`` can be used in CSS as well.

There is a speed advantage to using CSS to control image sizes as it loads HTML and CSS first and the browser will make space for the images rather than resize everything afterwards.

CSS also lets you have a standardized image size across the site.

**Aligning Images Using CSS**

It's possible to align things with HTML, but CSS also has the properties which can make things more consistent. 

The book has the examples of classes being created with specific ``float`` attributes.

```
img.align-left {
    float: left; - pushes image to the left side of the screen
    margin-right: 10px - margin so text doesn't touch
}
```

**Centering Images Using CSS**

Images are usually inline elements unless they are specified to be block elements, which will make it so it no longer flows in with other inline elements.

```
img.align-center {
    display: block; - change from inline to block.
    margin: 0px auto; - left and right are set to auto, which means it won't be off to one side.
}
```

**Background Images**

Use ``background-image`` as a property to make an image move in the Z axis behind an HTML element.

Background images will repeat to fill a box if not specified otherwise.

e.g.

```
p {
    background-image: url("somepicorgif.jpg");
}
```

Note: Background images can make websites seem slow to load as they are one of the last things loaded.

**Repeating Images**

In order to change how a background repeats or doesn't the following values are used with the ``background-repeat`` property.

``repeat`` - image is repeated up and down (the default)

``repeat-x`` - image is only repeated horizontally

``repeat-y`` - image is only repeated vertically

``no-repeat`` - used only once with no repeat

There is also the ``background-attachment`` property which can make it so the image stays within the user's view as they scroll or not using the following values.

``fixed`` - background image stays with the user's view

``scroll`` - background image moves as the user scrolls

**Background Position**

When ``no-repeat`` is specified, the background image location can be specified using the combination of the following using ``background-position``.

``left``, ``center``, or ``right``

and

``top``, ``center`` and ``bottom``.

e.g. ``background-position: left bottom``

**Image Rollovers and Sprites**

CSS can change a button style when a mouse hovers over it through the use of CSS techniques which create a *sprite*. These are combinations of multiple images in the same spot/file.

Sprites also help with the reduction of the number of images a browser has to load.

Code below from W3Schools:

```
#navlist {
  position: relative;
}

#navlist li {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 0;
}

#navlist li, #navlist a {
  height: 44px;
  display: block;
}

#home {
  left: 0px;
  width: 46px;
  background: url('img_navsprites_hover.gif') 0 0;
}

#prev {
  left: 63px;
  width: 43px;
  background: url('img_navsprites_hover.gif') -47px 0;
}

#next {
  left: 129px;
  width: 43px;
  background: url('img_navsprites_hover.gif') -91px 0;
}

#home a:hover {
  background: url('img_navsprites_hover.gif') 0 -45px;
}

#prev a:hover {
  background: url('img_navsprites_hover.gif') -47px -45px;
}

#next a:hover {
  background: url('img_navsprites_hover.gif') -91px -45px;
}
```

**CSS3: Gradients**

Gradients can be produced using certain browsers, but they are specific to the browser and not always supported.


### Chapter 19: “Practical Information” (476-492)

**Search Engine Optimization**

SEO is for helping users find your site via search engines and using best practices that will help search engines categorize and index your website so they can be found with the right keywords.

There are on-page and off-page techniques that are useful for this, but it's recommended not to cheat as most search engines penalize such behavior. 

**Analytics**

Figuring out where your users are coming from, what they are seeing, and where they are going can help optimize your website.

If users are leaving immediately after hitting a page, then it's useful to look at that page and see if there are any issues, or ways so that the proper audience sees them.

**Domain Names & Hosting**

In order to publish a site to the web it needs a domain name, and a web server constantly connected to the internet. While it's possible to host your own, it's usually much more cost effective for small businesses to do so through the use of a web service.

**FTP & Third Party Tools**

Sending images and files to your device to the hosting company uses a FTP, or a File Transfer Protocol. It's possible to do so directly through the web hosting service, but it's usually faster to find a program dedicated to FTP.

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs

**Video and Audio APIs**

You can use HTML5 to play videos directly on pages and control them via the API.

JavaScript is necessary in order to implement this properly.

**HTML5 Video and Audio**

``<video>`` and ``<audio>`` are the elements used to control video and audio respectively.

```
<video controls>
  <source src="dogridingaskateboard.mp4" type="video/mp4">
</video>
```

The ``controls``` attribute adds video controls such as pause and playback. However the native controls are based on the browser, so it's better to create specific playback controls using JavaScript.

``HTMLMediaElement`` has a long list of properties available to it to help control audio and video on a site.

The code in the reading for creating a useful video player is actually somewhat complex but it was interesting to see how much minute control you can have over the functions of a video player through JavaScript and through CSS, but even with the amount of code there was some basic aspects missing that we might be used to, such as video scrubbing (such as being able to choose a timeslot in the video with the bar).





*Bookmark/Skim
Chapter 9: pages 201-206 only. Flash is no longer supported by many browsers but is an important part of history.*
