# Reading 12 - Chart.js, Canvas

https://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/

https://www.chartjs.org/docs/latest/

### EASILY CREATE STUNNING ANIMATED CHARTS WITH CHART.JS

JavaScript has charts.js, a JS plugin using HTML5 to make a graph.

Acquire from: https://github.com/chartjs/Chart.js

**Drawing A Line Chart**

Create a canvas element in HTML.

e.g. (from web designer depot)
``<canvas id="buyers" width="600" height="400"></canvas>``

Add to foot of body element (from web designer depot)

```
<script>
    var buyers = document.getElementById('buyers').getContext('2d');
    new Chart(buyers).Line(buyerData);
</script>
```

And here is the JS for the graph (from web designer depot):

```
var buyerData = {
	labels : ["January","February","March","April","May","June"],
	datasets : [
		{
			fillColor : "rgba(172,194,132,0.4)",
			strokeColor : "#ACC26D",
			pointColor : "#fff",
			pointStrokeColor : "#9DB86D",
			data : [203,156,99,251,305,247]
		}
	]
}
```

**Drawing a bar chart**

Similar code to above except use the following in JS (from web designer depot):

```
var income = document.getElementById("income").getContext("2d");
new Chart(income).Bar(barData);
```

Along with (from web designer depot):

```
var barData = {
	labels : ["January","February","March","April","May","June"],
	datasets : [
		{
			fillColor : "#48A497",
			strokeColor : "#48A4D1",
			data : [456,479,324,569,702,600]
		},
		{
			fillColor : "rgba(73,188,170,0.4)",
			strokeColor : "rgba(72,174,209,0.4)",
			data : [364,504,605,400,345,320]
		}

	]
}
```

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage

Basic usage notes, skeletons, structure.

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

Canvas can be used to create shapes.

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors

Styles and colors that can be used, how to adjust them.

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text

Drawing and styling text.