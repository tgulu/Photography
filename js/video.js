document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.videos video, .videos iframe');
  const titles = document.querySelectorAll('.video-title');
  const pagination = document.querySelector('.pagination');

  // Initialize pagination buttons
  for (let i = 0; i < videos.length; i++) {
    const button = document.createElement('button');
    button.textContent = i + 1;
    button.addEventListener('click', () => {
      goToVideo(i);
    });
    pagination.appendChild(button);
  }

  let currentIndex = 0;
  goToVideo(0); // Show the first video when the page loads

  function goToVideo(index) {
    if (index >= 0 && index < videos.length) {
      currentIndex = index;
      updatePagination();
      updateSlider();
    }
  }

  function updatePagination() {
    const buttons = pagination.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (index === currentIndex) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  function updateSlider() {
    // Hide all videos and titles
    videos.forEach(video => {
      video.classList.remove('active');
    });
    titles.forEach(title => {
      title.classList.remove('active');
    });
    // Show only the current video and its title
    videos[currentIndex].classList.add('active');
    titles[currentIndex].classList.add('active');
  }
});