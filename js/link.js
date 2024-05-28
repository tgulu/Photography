window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



const placesPhotography = document.getElementById("places-photography");
placesPhotography.addEventListener("click", function () {
  window.location.href = "/html/places.html";
});

const facesPhotography = document.getElementById("faces-photography");
facesPhotography.addEventListener("click", function () {
  window.location.href = "/html/faces.html";
});


