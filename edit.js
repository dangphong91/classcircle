let myCircle = function(radius) {
    this.radius = radius;
    this.getRadius = function() {
        return radius;
    }
    this.getArea = function() {
        return (3.14 * radius * radius);
    }
}
let circle = new myCircle(2);
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius: " + radius + "; area: " + area);
let circle1 = new myCircle(4);
radius = circle1.getRadius();
area = circle1.getArea();
alert("radius: " + radius + "; area: " + area);