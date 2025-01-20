try {
  var logbtn = document.getElementById("login");
  var div = document.getElementById("firstsec1");

  var params = new URLSearchParams(window.location.search);
  var isLoggedIn = params.get("isLoggedIn") === "true";
  var userName = params.get("userName");
  var email = params.get("email");

  if (isLoggedIn) {
    logbtn.textContent = "Sign Out";
    div.insertAdjacentHTML("afterbegin", `<h1>Hello ${userName}</h1>`);
  } else {
    logbtn.textContent = "Login";
  }

  logbtn.addEventListener("click", function () {
    if (isLoggedIn) {
      window.location.replace("temp.html");
    } else {
      window.location.replace("page2.html");
    }
  });
} catch (x) {}


try {
  var check = document.getElementById("check");
  var submit = document.getElementById("submit");
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var p = document.getElementsByTagName("p")[0];

  check.addEventListener("click", function () {
    p.style.color = check.checked ? "black" : "grey";
  });

  submit.addEventListener("click", function (e) {
    if (check.checked) {
      e.preventDefault();
      var queryParams = new URLSearchParams({
        userName: username.value,
        email: email.value,
        isLoggedIn: "true",
      });
      window.location.replace(`temp.html?${queryParams.toString()}`);
    } else {
      e.preventDefault();
      alert("Please agree to the terms before proceeding.");
    }
  });
} catch (x) {}

