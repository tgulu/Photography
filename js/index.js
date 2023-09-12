const placesPhotography = document.getElementById("placesPhotography");
placesPhotography.addEventListener("click", function () {
  window.location.href = "/html/places.html";
});

const facesPhotography = document.getElementById("facesPhotography");
facesPhotography.addEventListener("click", function () {
  window.location.href = "/html/faces.html";
});



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})