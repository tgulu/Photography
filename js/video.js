document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.videos video');
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
    updatePagination();

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
      const videoWidth = videos[currentIndex].clientWidth;
      const offset = currentIndex * videoWidth;
      document.querySelector('.videos').style.transform = `translateX(-${offset}px)`;
    }
  });