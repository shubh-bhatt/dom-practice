let arr = [
  {
    username: "Shubham",
    age: 23,
    isMarried: false,
    image:
      "https://images.unsplash.com/photo-1750330079912-f94aff550e53?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Harsh",
    age: 27,
    isMarried: true,
    image:
      "https://images.unsplash.com/photo-1748200100269-6ce58c75fc30?q=80&w=787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Satwik",
    age: 24,
    isMarried: false,
    image:
      "https://images.unsplash.com/photo-1733576277415-893e52834981?q=80&w=771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let sum = "";
arr.forEach(function (elem) {
  sum =
    sum +
    `<div class="card">
      <img
        src="${elem.image}"
        alt=""
      />
      <h1>${elem.username}</h1>
      <h5>${elem.age}</h5>
      <h4>Married: ${elem.isMarried}</h4>
    </div>`;
});

let body = document.querySelector("body");
body.innerHTML = sum;
