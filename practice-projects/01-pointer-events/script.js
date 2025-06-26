let pointer = document.querySelector("#pointer");
let body = document.querySelector("body");

pointer.style.height = "20px";
pointer.style.width = "20px";
pointer.style.borderRadius = "50%";
pointer.style.position = "absolute";
pointer.style.backgroundColor = "white";

body.addEventListener("mousemove", function (dets) {
  pointer.style.top = `${dets.y}px`;
  pointer.style.left = `${dets.x}px`;
  pointer.style.transform = "translate(-50%, -50%)";

  console.log(dets.x, dets.y);
});
