let h = document.querySelector("h3");
let button = document.querySelector("button");
let check = 0;

button.addEventListener("click", function () {
  if (check == 0) {
    h.innerHTML = "Added to Friend List";
    h.style.color = "green";
    button.innerHTML = "Remove Friend";
    check = 1;
  } else {
    h.innerHTML = "Individual";
    h.style.color = "red";
    button.innerHTML = "Add Friend";
    check = 0;
  }
});
