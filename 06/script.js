let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let btn = document.querySelector("button");

let at1 = img1.getAttribute("src");
let at2 = img2.getAttribute("src");

let flag = false;

btn.addEventListener("click", function () {
  if (!flag) {
    img1.setAttribute("src", at2);
    img2.setAttribute("src", at1);

    flag = true;
  } else {
    img1.setAttribute("src", at1);
    img2.setAttribute("src", at2);

    flag = false;
  }
});
