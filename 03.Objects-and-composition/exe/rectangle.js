// Write a function that creates and returns a rectangle object. 
// The rectangle needs to have a width (Number), height (Number), and color (String) properties,
// \ which are set via arguments during creation, and a calcArea() method, 
// that calculates and returns the rectangle’s area.

function rectangle(width, height, color) {
    color = color[0].toUpperCase() + color.substr(1, color.length);
    return {
        width,
        height,
        color: color,
        calcArea() {return width*height}
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
