const placesPhotography = document.getElementById("places-photography");
placesPhotography.addEventListener("click", function () {
  window.location.href = "/html/places.html";
});

const facesPhotography = document.getElementById("faces-photography");
facesPhotography.addEventListener("click", function () {
  window.location.href = "/html/faces.html";
});

const electronics = document.getElementById("electronics-page");
electronicsPage.addEventListener("click", function () {
  window.location.href = "/html/electronics.html";
});


const homePage = document.getElementById("home-page");
homePage.addEventListener("click", function () {
  window.location.href = "index.html";
});

// video player 
const videoPlayer = document.getElementById('videoPlayer');
const myVideo = document.getElementById('myVideo');

function stopVideo(){
    videoPlayer.style.display = 'none';
}

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = 'block';
}

