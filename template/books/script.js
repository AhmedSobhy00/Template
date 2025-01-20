function Author(name, email) {
  this.name = name;
  this.email = email;
}

function Book(name, price, author) {
  this.name = name;
  this.price = price;
  this.author = author;
}

var n = document.getElementById("n");
var doneBtn = document.getElementById("done");
var span = document.getElementById("span");

var booksN = document.getElementById("booksN");
var details = document.getElementById("details");
var table = document.getElementById("table");

var another = document.getElementById("another");
var add = document.getElementById("add");
var cancel = document.createElement("button");
cancel.textContent = "Cancel";
cancel.id = "cancel";
cancel.style.display = "none";
details.appendChild(cancel);

var detailsInputs = document.querySelectorAll("#details input");
var warning = document.querySelectorAll(".warning");
var tbody = document.querySelector("tbody");

var books = [];
var currentBookIndex = -1;
var numberOfBooks = 0;

doneBtn.addEventListener("click", () => {
  var numBooks = parseInt(n.value);
  if (isNaN(numBooks) || numBooks <= 0) {
    span.style.display = "block";
  } else {
    span.style.display = "none";
    booksN.style.display = "none";
    details.style.display = "flex";
    numberOfBooks = numBooks;
  }
});

add.addEventListener("click", (e) => {
  e.preventDefault();

  var bookName = detailsInputs[0].value.trim();
  var bookPrice = parseFloat(detailsInputs[1].value);
  var authorName = detailsInputs[2].value.trim();
  var authorEmail = detailsInputs[3].value.trim();

  if (!bookName || !isNaN(bookName)) {
    warning[0].style.visibility = "visible";
    return;
  } else {
    warning[0].style.visibility = "hidden";
  }

  if (isNaN(bookPrice) || bookPrice < 100 || bookPrice > 2000) {
    warning[1].style.visibility = "visible";
    return;
  } else {
    warning[1].style.visibility = "hidden";
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(authorEmail)) {
    warning[3].style.visibility = "visible";
    return;
  } else {
    warning[3].style.visibility = "hidden";
  }

  if (!authorName) {
    warning[2].style.visibility = "visible";
    return;
  } else {
    warning[2].style.visibility = "hidden";
  }

  var author = new Author(authorName, authorEmail);
  var newBook = new Book(bookName, bookPrice, author);

  if (currentBookIndex === -1) {
    books.push(newBook);
  } else {
    books[currentBookIndex] = newBook;
    currentBookIndex = -1;
    add.textContent = "Add";
    cancel.style.display = "none";
  }

  detailsInputs.forEach(input => input.value = "");

  if (books.length >= numberOfBooks) {
    details.style.display = "none";
    table.style.display = "flex";
  }

  updateTable();
});

cancel.addEventListener("click", () => {
  detailsInputs.forEach(input => input.value = "");
  currentBookIndex = -1;
  add.textContent = "Add";
  cancel.style.display = "none";
  details.style.display = "none";
  table.style.display = "flex";
});

another.addEventListener("click", () => {
  booksN.style.display = "flex";
  details.style.display = "none";
  table.style.display = "none";
});

function updateTable() {
  tbody.innerHTML = "";

  books.forEach((book, index) => {
    var row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.name}</td>
      <td>$${book.price.toFixed(2)}</td>
      <td>${book.author.name}</td>
      <td>${book.author.email}</td>
      <td class='here'>
        <button class='edit-btn' data-index='${index}'>Edit</button>
        <button class='devare-btn' data-index='${index}'>Devare</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  document.querySelectorAll(".edit-btn").forEach(btn => btn.addEventListener("click", handleEdit));
  document.querySelectorAll(".devare-btn").forEach(btn => btn.addEventListener("click", handleDevare));
}

function handleEdit(e) {
  var index = parseInt(e.target.dataset.index);
  var book = books[index];

  detailsInputs[0].value = book.name;
  detailsInputs[1].value = book.price;
  detailsInputs[2].value = book.author.name;
  detailsInputs[3].value = book.author.email;

  currentBookIndex = index;
  add.textContent = "Save";
  cancel.style.display = "inline-block";

  details.style.display = "flex";
  table.style.display = "none";
}

function handleDevare(e) {
  var index = parseInt(e.target.dataset.index);
  books.splice(index, 1);
  updateTable();
  if(books.length==0){
    booksN.style.display = "flex";
    details.style.display = "none";
    table.style.display = "none";
  }
}
