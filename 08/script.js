let box = document.querySelector("#box");
let body = document.querySelector("body");

box.addEventListener("mouseenter", function () {
  body.style.backgroundColor = "red";
  box.style.backgroundColor = "blue";
});

box.addEventListener("mouseleave", function () {
  body.style.backgroundColor = "blue";
  box.style.backgroundColor = "red";
});
