function callNode() {
  fetch("/api/node/hello")
    .then((res) => res.json())
    .then((data) => alert(data.message));
}

function callFlask() {
  fetch("/api/flask/hello")
    .then((res) => res.json())
    .then((data) => alert(data.message));
}
