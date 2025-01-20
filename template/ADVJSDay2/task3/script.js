function Box(height, width, length, material, type) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.volume = height * width * length;
  this.material = material;
  this.type = type;
  this.content = [];
}

Box.prototype.addBook = function (
  name,
  type,
  numOfChapters,
  author,
  numPages,
  publisher,
  numOfCopies
) {
  var book = {
    name: name,
    type: type,
    numOfChapters: numOfChapters,
    author: author,
    numPages: numPages,
    publisher: publisher,
    numOfCopies: numOfCopies,
  };
  this.content.push(book);
};

Box.prototype.deleteBook = function (criteria) {
  this.content = this.content.filter(function (book) {
    return book.name !== criteria && book.type !== criteria;
  });
};

Box.prototype.countBooks = function () {
  return this.content.length;
};

Box.prototype.toString = function () {
  return (
    "Box Details:\n" +
    "Height = " +
    this.height +
    ", Width = " +
    this.width +
    ", Length = " +
    this.length +
    ", Volume = " +
    this.volume +
    ", Number of Books = " +
    this.countBooks()
  );
};

Box.prototype.valueOf = function () {
  return this.countBooks();
};

var box1 = new Box(10, 15, 20, "wood", "storage");
var box2 = new Box(8, 12, 18, "plastic", "shipping");

box1.addBook("Book A", "Scince", 10, "Author 1", 200, "Publisher 1", 5);
box1.addBook("Book B", "art", 8, "Author 2", 150, "Publisher 2", 3);
box1.addBook("Book c", "Cooking", 8, "Author 2", 150, "Publisher 2", 3);
box2.addBook("Book C", "science", 12, "Author 3", 300, "Publisher 3", 4);

console.log("Box 1 has " + box1.countBooks() + " book(s).");
box1.deleteBook("Book A");
console.log("After delete :Box 1 has " + box1.countBooks() + " book(s).");

console.log("Box 2 has " + box2.countBooks() + " book(s).");

console.log(box1.toString());
console.log(box2.toString());
console.log("Total books in both boxes: " + (box1 + box2));
