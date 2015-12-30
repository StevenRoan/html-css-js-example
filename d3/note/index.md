# D3.js
#### Basic flow of concept of d3.js
* Set the properties of whole picture
``` javascript
var svg = d3.select(el)
    .append("svg")
    .attr("width", this.props.width)
    .attr("height", this.props.height);
```

* set yScale