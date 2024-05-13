const numbCategory = document.querySelectorAll(".item").length;

console.log(`Number of categories: ${numbCategory}`);

const li = document.querySelectorAll("li");

const arr = Array.from(document.querySelectorAll(".item"));

arr.forEach((elem) => {
  console.log(
    `Category: ${elem.querySelector("h2").textContent}\nElements: ${
      elem.querySelectorAll("li").length
    }`
  );
});
