var namespace = "http://www.w3.org/2000/svg"
var html = "http://www.w3.org/1999/xhtml"

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    makeCircle(100, 50, 30, "#DD6655", 1);
    makeCircle(91,38,5,"#FFF",1);
    makeCircle(109,38,5,"#FFF",1);
    var xc = Math.random()-0.5
    var yc = Math.random()-0.5
    makeCircle(91+xc,38+yc,2,"#000",1);
    makeCircle(109+xc,38+yc,2,"#000",1);
    //makeEllipse(100,53,8,7,"#E55D2A");
    makePath("M 92.2 54 C 92 43 108 43 107.8 54","#D55E4D", "#D55E4D")
    makeEllipse(100,54,8,6,"#CC5544");
    makeEllipse(98,54,1.5,3,"#000");
    makeEllipse(102,54,1.5,3,"#000");
    makePath("M 89 65 C 96 70 110 68 115 62","#000", "none","round");
    makePath("M 85 25 c -17 10 -13 20 -12 20 c 13 -10 13 -20 12 -20","#CC5544","#CC5544");
    makePath("M 115 25 c 17 10 13 20 12 20 c -13 -10 -13 -20 -12 -20","#CC5544","#CC5544");
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeCircle(Math.random()*200,Math.random()*100, Math.random()*50, createColor());
    var rectWidth = Math.random()*100;
    var rectHeight = Math.random()*100;
    makeRect(Math.random()*200-rectWidth,Math.random()*100-rectHeight, rectWidth, rectHeight, createColor());
    var pathc = createColor()
    makePath("M " + Math.random()*200 + " " + Math.random()*100 + " l "+((Math.random()*200)-100) + " "+((Math.random()*200)-100) + " l "+((Math.random()*200)-100) + " "+((Math.random()*200)-100) + " C",pathc,pathc);
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    makePath("M 150 10 l 40 0 l 0 80 l -40 0 l 0 -80","#000","#FFF");
    makePath("M 155 15 l 30 0 l 0 7 l -30 0 l 0 -7","#000","#FFF");
    makePath("M 155 22 l 30 0 l 0 7 l -30 0 l 0 -7","#000","#FFF");
    makePath("M 155 29 l 30 0 l 0 7 l -30 0 l 0 -7","#000","#FFF");
    makeBdCircle("182", "43", "2", "#DDD", "#000")
    makeBdEllipse("83","85","10","3","#FFF", "#000")
    //makeLine("83","70","83", "85", "#FFF", 3)
    makeBdRect("80","40","6","44","#FFF","#000")
    makeBdRect(30,10,106,64,"#FFF","#000")
    makeBdRect(35,15,96,54,"#000","#000")
    if (Math.random()<=0.5){
	makeIframe(35,15,96,54,1920,1080,"https://kde.org")
    } else{makeIframe(35,15,96,54,1920,1080,"https://duckduckgo.com")}
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    for (var children = document.getElementById("canvas").children;children.length>0;document.getElementById("canvas").removeChild(children[0]))
    // Generate a random number between 0 and 1, and store it in a variable.
    var random=Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    
    if (random<0.33){
	createFirstScene()
    }
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    else if (random<0.67){
	createSecondScene()
    }
    // Else, call the function to create your third scene.
    
    else {
	createThirdScene()
    }
    //alert("Test " + Math.random())
    
}

function makeIframe(x,y,width,height,innerwidth, innerheight, src){
    var foreignObject = document.createElementNS(namespace, "foreignObject")
    foreignObject.setAttribute("x",0)
    foreignObject.setAttribute("y",0)
    foreignObject.setAttribute("width",innerwidth)
    foreignObject.setAttribute("height",innerheight)
    var body = document.createElementNS(html,"body")
    var iframe = document.createElementNS(html,"iframe")
    iframe.setAttribute("src", src)
    iframe.setAttribute("width",innerwidth)
    iframe.setAttribute("height",innerheight)
    iframe.setAttribute("marginheight",0)
    iframe.setAttribute("marginwidth",0)
    iframe.setAttribute("frameborder",0)
    var canvas2 = document.createElementNS(namespace,"svg")
    canvas2.setAttribute("viewBox", "-50 -60 " + (innerwidth+80) + " " + (innerheight+80))
    canvas2.setAttribute("width",width)
    canvas2.setAttribute("height",height)
    canvas2.setAttribute("x",x)
    canvas2.setAttribute("y",y)
    var g = document.createElementNS(namespace,"g")
    g.setAttribute("x",x)
    g.setAttribute("y",y)

    body.appendChild(iframe)
    foreignObject.appendChild(body)
    var canvas = document.getElementById("canvas")
    canvas2.appendChild(foreignObject)
    g.appendChild(canvas2)
    canvas.appendChild(g)
}

function makeBdCircle(cx, cy, r, fill, stroke, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("stroke", stroke)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeBdEllipse(cx, cy, rx, ry, fill, stroke, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("stroke",stroke)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function createColor(){
    var select1 = ["D", "E", "F"];
    var select2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var red = select2[Math.floor(Math.random()*16)] + select2[Math.floor(Math.random()*16)];
    var green = select2[Math.floor(Math.random()*16)] + select2[Math.floor(Math.random()*16)];
    var blue = select2[Math.floor(Math.random()*16)] + select2[Math.floor(Math.random()*16)];
    var color = "#" + red + green + blue;
    return color;
}

function makeBdRect(x, y, width, height, fill, stroke, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  rect.setAttribute("stroke",stroke)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

var canvas = document.getElementById("canvas");
var defs = document.createElementNS(namespace, "defs");
defs.setAttribute("id","defs");
canvas.appendChild(defs);

function makePath(d,stroke,fill,linecap,strokeWidth){
  var path = document.createElementNS(namespace, "path")
  path.setAttribute("d",d);
  path.setAttribute("stroke",stroke);
  path.setAttribute("fill",fill)
  path.setAttribute("stroke-linecap",linecap)
  path.setAttribute("stoke-width",strokeWidth)
  var canvas = document.getElementById("canvas")
  canvas.appendChild(path)
}

function makeGradient(stop1, stop2){
  //
}

// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}
