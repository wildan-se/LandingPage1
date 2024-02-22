// Dapatkan tombol hamburger , menu navigasi, dan header
const btnHamburger = document.querySelector("#btn-hamburger");
const navMenu = document.querySelector("#nav-menu");
const header = document.querySelector("header");

// Ketika tombol hamburger di klik, tampilkan menu navigasi
btnHamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  navMenu.classList.remove("hidden");
  navMenu.style.top = "0";
});

// Ketika tombol close di klik, sembunyikan menu navigasi
const closeMenu = document.querySelector("#btn-close");

closeMenu.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  header.style.display = "flex";
});
