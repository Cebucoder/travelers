const leftArrow = document.getElementById('arrow-button-prev');
const rightArrow = document.getElementById('arrow-button-next');
const slider = document.getElementById('slider');

let currentIndex = 0;
const cardWidth = document.getElementById('slider-width').offsetWidth; // Width of each card including margin
const numCards = document.querySelectorAll('.slider-content').length; // Total number of cards
const visibleCards = 1; // Number of cards visible at a time

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function slideToRight() {
  const maxIndex = Math.max(numCards - visibleCards, 0);
  if (currentIndex < maxIndex) {
    currentIndex++;
    leftArrow.classList.add('jsarrowbg');
    rightArrow.classList.remove('jsarrownextbg');
  } else {
    currentIndex = 0; // Reset to the first card if the end is reached
    leftArrow.classList.remove('jsarrowbg');
    rightArrow.classList.add('jsarrownextbg');


  }
  updateSliderPosition();
}

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    leftArrow.classList.remove('jsarrowbg');
    rightArrow.classList.remove('jsarrownextbg');

    updateSliderPosition();
  }
});

rightArrow.addEventListener('click', () => {
  slideToRight();
});

// Automatically slide to the right every 10000 milliseconds (10 second)
const slideInterval = setInterval(() => {
  slideToRight();
}, 10000);


// A temporary solution to adjust the slider width when the user resizes the browser window
window.addEventListener('resize', () => {
  cardWidth = document.getElementById('slider-width').offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    updateSliderPosition();
  });


// If you want to stop the continuous sliding at some point, you can use clearInterval
// For example, to stop the sliding after 10 seconds, you can add the following code:
// setTimeout(() => {
//   clearInterval(slideToRight());
// }, 10000); // 10000 milliseconds = 10 seconds