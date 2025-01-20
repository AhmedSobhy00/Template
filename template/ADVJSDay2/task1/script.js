function Rectangle(x, y) {
  this.width = x || 0;
  this.height = y || 0;
}
Rectangle.prototype.area = function () {
  return this.width * this.height;
};
Rectangle.prototype.para = function () {
  return (this.width + this.height) * 2;
};

Rectangle.prototype.toString = function () {
  return "width is: " + this.width + " height is: " + this.height;
};

var rect = new Rectangle(3, 4);
console.log(rect.area());
console.log(rect.para());
console.log(rect.toString());
