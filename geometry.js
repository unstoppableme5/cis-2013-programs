function getRectangleArea(){
    var w = parseFloat(document.getElementById('rect_width').value);
    var h = parseFloat(document.getElementById('rect_height').value);

    alert("The rectangle area is: " + parseFloat(w * h));
}

function getRectanglePerimeter(){
    var w = parseFloat(document.getElementById('rect_width').value);
    var h = parseFloat(document.getElementById('rect_height').value);

    alert("The rectangle perimeter is: " + parseFloat(w + w + h + h)) ;
}

function getTriangleArea(){
    var a = parseFloat(document.getElementById('tri_side1').value);
    var b = parseFloat(document.getElementById('tri_side2').value);
    var c = parseFloat(document.getElementById('tri_side3').value);
    var s= a + b + c;

    alert("The triangle area is: " + Math.sqrt(s*(s-a)*(s-b)*(s-c)));
}

function getTrianglePerimeter(){
    var a = parseFloat(document.getElementById('tri_side1').value);
    var b = parseFloat(document.getElementById('tri_side2').value);
    var c = parseFloat(document.getElementById('tri_side3').value);

    alert("The triangle perimeter is: " +  parseFloat(a + b + c));
}

function getCircleArea(){
    var r = parseFloat(document.getElementById('radius').value);
    alert("The cirle area is: " +  parseFloat(r * r * 3.14));
}

function getCirclePerimeter(){
    var r = parseFloat(document.getElementById('radius').value);
    alert("The circle perimeter is: " + parseFloat(2 * r * 3.14));
}

function calculateEverything(){
    var w = parseFloat(document.getElementById('rect_width').value);
    var h = parseFloat(document.getElementById('rect_height').value);

    var a = parseFloat(document.getElementById('tri_side1').value);
    var b = parseFloat(document.getElementById('tri_side2').value);
    var c = parseFloat(document.getElementById('tri_side3').value);
    var s= a + b + c;

    var r = parseFloat(document.getElementById('radius').value);

    alert("The rectangle area is: " + parseFloat(w * h) + 
        ". The rectangle perimeter is: " + parseFloat(w + w + h + h) +
        ". The triangle area is: " +  Math.sqrt(s*(s-a)*(s-b)*(s-c)) +
        ". The triangle perimeter is: " +  parseFloat(a + b + c) + 
        ". The cirle area is: " +  parseFloat(r * r * 3.14) +
        ". The circle perimeter is: " +  parseFloat(2 * r * 3.14));
}