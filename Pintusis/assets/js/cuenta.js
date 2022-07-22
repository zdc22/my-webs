// Variables
const btnSwitch = document.querySelector("#switch");
//Modo oscuro
btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});

// Sidebar
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("show");
});
