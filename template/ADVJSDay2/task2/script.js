function Shape(x, y) {
  if (this.constructor == Shape) {
    throw "Abstraaaaaaact";
  } else {
    this.x = x || 0;
    this.y = y || 0;
  }
}

Shape.prototype.CalcArea = function () {
  return this.x * this.y;
};
Shape.prototype.CalcParm = function () {
  return (this.x + this.y) * 2;
};

function Rectangle(x, y) {
  if (Rectangle.instance) {
    throw "Only one Rectangle instance is allowed!";
  }
  Shape.call(this, x, y);
  Rectangle.instance = this;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle(2, 4);
console.log(rect.CalcArea());

function Square(x, y) {
  if (Square.instance) {
    throw "Only one Square instance is allowed!";
  }
  Shape.call(this, x, y);
  Square.instance = this;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.CalcArea = function () {
  return this.x * this.x;
};
Square.prototype.CalcParm = function () {
  return this.x * 4;
};

var sq = new Square(2);
console.log(sq.CalcArea());
// console.log(sq.CalcParm());

function Circle(x) {
  Shape.call(this, x);
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.CalcArea = function () {
  return this.x * this.x * Math.PI;
};
Circle.prototype.CalcParm = function () {
  return this.x * Math.PI * 2;
};

var ci=new Circle(3)

console.log(ci.CalcArea());
console.log(ci.CalcParm());

