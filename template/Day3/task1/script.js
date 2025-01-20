var xhr = new XMLHttpRequest();
var h2 = document.querySelector("h2");
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
var body = document.getElementsByTagName("body")[0];
xhr.send();

xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState=3) {
    h2.style.visibility = "visible";
    
  }

  if (xhr.readyState == 4) {
    h2.style.visibility = "hidden";
    if (xhr.status == 200) {
      var response = JSON.parse(xhr.response);

      if (response.length === 0) {
        body.innerHTML = "<p>No data available to display.</p>";
      } else {
        response.forEach((element) => {
          body.innerHTML += `
            <div>
              <p><strong>userId:</strong> ${element.userId}</p>
              <p><strong>id:</strong> ${element.id}</p>
              <p><strong>title:</strong> ${element.title}</p>
              <p><strong>body:</strong> ${element.body}</p>
              <hr />
            </div>
          `;
        });
      }
    } else {
      body.innerHTML = "<p>Error</p>";
    }
  }
});
