let box = document.querySelector("#box");
let img = document.querySelector("img");

img.addEventListener("dblclick", function () {
  let imgheart = document.createElement("img");
  imgheart.setAttribute("src", "/09/heart.png");
  imgheart.style.height = "25px";
  imgheart.style.position = "absolute";
  imgheart.style.top = "50%";
  imgheart.style.left = "50%";
  imgheart.style.transform = "translate(-50%, -50%)";

  box.appendChild(imgheart);

  setTimeout(function () {
    imgheart.remove();
  }, 500);
});
