let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

console.log(menu);
console.log(navbar);
menu.addEventListener("click", function () {
  console.log(123);
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
};
