let arr = [
  {
    username: "Shubham",
    age: 23,
    isMarried: false,
    rel: "Stranger",
    image:
      "https://images.unsplash.com/photo-1750330079912-f94aff550e53?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Harsh",
    age: 27,
    isMarried: true,
    rel: "Stranger",
    image:
      "https://images.unsplash.com/photo-1748200100269-6ce58c75fc30?q=80&w=787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Satwik",
    age: 24,
    isMarried: false,
    rel: "Stranger",
    image:
      "https://images.unsplash.com/photo-1733576277415-893e52834981?q=80&w=771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let main = document.querySelector("#main");

function heroFunction() {
  let sum = "";

  arr.forEach(function (elem, idx) {
    sum =
      sum +
      `<div class="card">
        <img src="${elem.image}" alt="" />
        <h1>
          ${elem.username}, ${elem.age}
        </h1>
        <h4>Married: ${elem.isMarried}</h4>
        <h3>${elem.rel}</h3>
        <button id="${idx}">Add Friend</button>
      </div>`;
  });

  main.innerHTML = sum;
}

heroFunction();

main.addEventListener("click", function (dets) {
  let gold = arr[dets.target.id];
  if (gold.rel == "Stranger") {
    gold.rel = "Friends";
  } else {
    gold.rel = "Stranger";
  }
  heroFunction();
});
