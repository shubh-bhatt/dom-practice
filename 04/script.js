let arr = [
  { team: "CSK", primary: "yellow", secondary: "blue" },
  { team: "MI", primary: "blue", secondary: "gold" },
  { team: "RCB", primary: "red", secondary: "black" },
  { team: "SRH", primary: "orange", secondary: "black" },
  { team: "KKR", primary: "purple", secondary: "gold" },
];

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * arr.length);
  h1.innerHTML = arr[num].team;
  h1.style.backgroundColor = arr[num].primary;
  h1.style.color = arr[num].secondary;
});
