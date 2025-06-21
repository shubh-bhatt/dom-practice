let team = ["RCB", "CSK", "MI", "RR", "PBKS", "GT", "KKR", "SRH", "LSG", "DC"];

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * team.length);
  h1.innerHTML = team[num];
});
