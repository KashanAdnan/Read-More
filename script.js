function addTextVal() {
  var text = document.getElementById("text").value;
  var output = document.getElementById("output");
  if (text.length <= 50) {
    output.innerHTML = "<h1>" + text + "....</h1>";
  } else {
    output.innerHTML =
      `<h1 >${text.slice(0, 50)}...</h1>` +
      ` <button id="btn" onclick="read()">Read More</button>`;
  }
}

function read() {
  var output = document.getElementById("output");
  var text = document.getElementById("text").value;
  var btn = document.getElementById("btn");
  btn.innerText = "Read Less";
  output.innerHTML = `<h1>${text}</h1><button onclick="showLess()">Show Less</button>`;
}

function showLess() {
  var output = document.getElementById("output");
  var text = document.getElementById("text").value;
  output.innerHTML =
    "<h1>" +
    text.slice(0, 50) +
    "....</h1>" +
    `<button id="btn" onclick="read()">Read More</button>`;
}
