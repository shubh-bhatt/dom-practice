let x = 0;
let y = 0;

let box = document.querySelector("#box");

document.addEventListener("keydown", function (dets) {
  console.log(dets.key);

  if (dets.key == "ArrowLeft") {
    x -= 100;
  } else if (dets.key == "ArrowRight") {
    x += 100;
  } else if (dets.key == "ArrowDown") {
    y += 100;
  } else if (dets.key == "ArrowUp") {
    y -= 100;
  }

  box.style.transform = `translate(${x}px, ${y}px)`;
});
