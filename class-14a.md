# Read: 14a - CSS Transforms, Transitions, and Animations

From: https://learn.shayhowe.com/advanced-html-css/css-transforms/

### HTML & CSS: Transforms

``transform`` property - 2d or 3d. Due to lack of support, it's reccomended to use multiple vendor prefixes. Example from shayhowe.com below:

```
div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
}
```

**2D Transforms**

These transforms work on the X and Y axes.

``rotate`` An element can be rotated from 0 to 360 degrees. Positive value for clockwise, negative for counter clockwise.

By default rotates at the center of the element, but this can be modified.

e.g. (from shayhowe.com)
```
.box-1 {
  transform: rotate(20deg);
}
```


``scale`` Can change the size of the element. Default size is 1. 0.01 to .99 will decrease size, while sizes over 1 will increase size.

Can scale only height or width with ``scaleY`` and ``scaleX`` respectively.

e.g. (from shayhowe.com)
```
.box-1 {
  transform: scale(.75);
}
```


``translate`` Change the relative position of the element. Can move in the X or Y axes.

e.g. (from shayhowe.com)

```
.box-1 {
  transform: translateX(-10px);
}
```

``skew`` Distorts the elemnt on horizonta, vertical, or both axes. Distoirtion is based off of degrees.

e.g. (from shayhowe.com)

```
.box-1 {
  transform: skewX(5deg);
}
```

All of these transforms can be combined.

3D transforms also incorporate the X-axis.


### HTML & CSS: Transforms

From: https://learn.shayhowe.com/advanced-html-css/transitions-animations/

This is the animation of a change in state for the element.

Like above, these may require vendor prefixes to work properly.

**Transitional Property**

``transition-property`` property changes what property will work with the transition and change the element. The example from shaehow.com shows the potential.

Only the background and borde-radius will change with this code.
```
.box {
    background: #2db34a;
    border-radius: 6px
    transition-property: background, border-radius;
    transition-duration: 1s;
    transition-timing-function: linear;
  }
  .box:hover {
    background: #ff7b29;
    border-radius: 50%;
  }
  ```

  Not all properties can be animated. Only properties with a "midpoint" can be transitioned. 

**Transition Duration**

``transition-duration`` property will add time values that can add a duration for the change, and can be set for individual properties.

``transition-timing-function`` property is used to set the acceleration using the following:

``linear``: consistent speed

``ease-in``: starts slow, speeds up

``ease-out``: starts fast, slows down

``ease-in-out``: starts slow, goes fast, slows down again

**Transition Delay**

``transition-delay`` property can add a delay in seconds or ms before the transition occurs.

  

**Animations**

Transitions can be built out to create animations.

``@keyframes`` this rule can have an element undergo multiple transitions.

See example from shaehow.com:

```
@keyframes slide {
  0% {
    left: 0;
    top: 0;
  }
  50% {
    left: 244px;
    top: 100px;
  }
  100% {
    left: 488px;
    top: 0;
  }
}
.stage {
  background: #eaeaed;
  border-radius: 6px;
  height: 150px;
  position: relative;
  min-width: 538px;
}
.stage:hover .ball {
  animation: slide 2s linear;
}
.ball {
  background: #2db34a;
  border-radius: 50%;
  height: 50px;
  position: absolute;
  width: 50px;
}
```

``animation-name`` this property allows the animation to be assigned to a particular element.

``animation-duration`` required so browser knows how long the animation should take.

**Animation Duration, Timing Function & Delay**

Can all be set in the code. See below from shaehow.com:

```
.stage:hover .ball {
  animation-name: slide;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: .5s;
}
```

```animation-iteration-count`` how many times you want that particular animation. Can run indefnitely using ``infinite``.


**Animation Direction**

``animation-direction`` can set how you want the animation to "play".

``normal`` default

``reverse`` from the end to the beginning

``alternate`` will play forward, then rewind

``alternate-reverse`` will play backwards then forwards

**Animation Play State**

``animation-play-state`` animation can be played or paused with these keywords: ``running`` and ``paused``


### 8 SIMPLE CSS3 TRANSITIONS THAT WILL WOW YOUR USERS

From: https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users

All code snippets from webdesignerdepot.com.

1. **Fade In**

Initial state, then the change.

```
.fade
{
        opacity:0.5;
}
.fade:hover
{
        opacity:1;
}
```

2. **Change Color**

Specify color you desire to change to.

```
.color:hover
{
        background:#53a7ea;
}
```

3. **Grow & Shrink**

Grow
```
.grow:hover
{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
}
```

Shrink

```
.shrink:hover
{
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
}
```

4. **Rotate Elements**

Makes element turn.

```
.rotate:hover
{
        -webkit-transform: rotateZ(-30deg);
        -ms-transform: rotateZ(-30deg);
        transform: rotateZ(-30deg);
}
```

5. **Square To Circle**

Makes a square into a circle.

```
.circle:hover
{
        border-radius:50%;
}
```

6. **3D Shadow**

Works by having a second box behind and moving the element out of the way so it appears to be 3D.

```
.threed:hover
{
        box-shadow:
                1px 1px #53a7ea,
                2px 2px #53a7ea,
                3px 3px #53a7ea;
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
}
```

7. **Swing**

This requires keyframes and animation to work.

```
@keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
```

Combined with:

```
.swing:hover
{
        -webkit-animation: swing 1s ease;
        animation: swing 1s ease;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
}
```

Really it makes it jiggle.

8. **Inset Border**

Apparently super hot right now. Button with no background and a heavy border.

```
.border:hover
{
        box-shadow: inset 0 0 0 25px #53a7ea;
}
```

# Examples of CSS3 Animations Below

**Floaty Animated Buttons**

https://codepen.io/retyui/pen/ByoaXV?__cf_chl_captcha_tk__=pmd_vVlSG6FqpohbSgUjfpClWu4oXhTNWy7jB1oIMX8m70w-1635409088-0-gqNtZGzNAzujcnBszQll

**Example of a CSS3 Keyframe Animation**: Bouncing ball.

https://codepen.io/akshaychauhan/pen/oAfae?__cf_chl_captcha_tk__=pmd_gENWRN3_P9DkKLaeB5Z54ba.ts3.tz6YrbN8DpmffV8-1635409089-0-gqNtZGzNAzujcnBszQmR

**Example of characters being animated**: For this one, a 404 error.

https://codepen.io/kieranfivestars/pen/MYdQxX?__cf_chl_captcha_tk__=pmd_ybMNiurF7vUd3dk4qStWvNcwaGLNajaLP7mY.CArTig-1635409090-0-gqNtZGzNAzujcnBszQmR

**A squishy ball that bounces and becomes a sphere**: neat

https://codepen.io/dp_lewis/pen/gCfBv?__cf_chl_captcha_tk__=pmd_CIBDyFkenypNEwZUxReBhdFr_HYoTFOI9PqKNDvg.yQ-1635409091-0-gqNtZGzNAzujcnBszQmR