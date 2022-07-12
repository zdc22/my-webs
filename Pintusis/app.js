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

// ScrollReveal
ScrollReveal().reveal(".hero");
ScrollReveal().reveal(".productos", { delay: 400 });
ScrollReveal().reveal(".nosotros", { delay: 400 });
ScrollReveal().reveal(".contacto", { delay: 400 });
