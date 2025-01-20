var bands = document.getElementsByTagName("select")[0];
var artist = document.getElementsByTagName("select")[1];

var xhr = new XMLHttpRequest();
var h2 = document.querySelector("h2");
xhr.open(
  "GET",
  "https://file.notion.so/f/f/c24597ac-244f-4bb7-8087-cdc64b57ce55/195b4a1e-6a42-4e40-beb3-fa467228dcdf/rockbands.json?table=block&id=3ab467fa-9e50-4376-a4dd-010c6e2062cd&spaceId=c24597ac-244f-4bb7-8087-cdc64b57ce55&expirationTimestamp=1735862400000&signature=pEPRbXBAc1Tbsv7RRkZVM3MH3GDBF6CaDhIC8RkWB8k&downloadName=rockbands.json"
);
var body = document.getElementsByTagName("body")[0];
xhr.send();

xhr.addEventListener("readystatechange", function () {
  if ((xhr.readyState = 3)) {
    h2.style.visibility = "visible";
  }

  if (xhr.readyState == 4) {
    h2.style.visibility = "hidden";
    if (xhr.status == 200) {
      var response = JSON.parse(xhr.response);

      if (response.length === 0) {
        body.innerHTML = "<p>No data available to display.</p>";
      } else {
        for (var key in response) {
          var option = document.createElement("option");
          option.value = key;
          option.textContent = key;
          bands.appendChild(option);
        }

        response[bands.value].forEach((member) => {
          var option = document.createElement("option");
          option.value = member.value;
          option.textContent = member.name;
          artist.appendChild(option);
        });

        bands.addEventListener("change", function () {
          artist.innerHTML = "";

          response[bands.value].forEach((member) => {
            var option = document.createElement("option");
            option.value = member.value;
            option.textContent = member.name;
            artist.appendChild(option);
          });
        });

        artist.addEventListener("change", function () {
          window.open(artist.value, "_blank");
        });
      }
    } else {
      body.innerHTML = "<p>Error</p>";
    }
  }
});
