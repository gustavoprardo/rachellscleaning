const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.slider-buttons button');
let currentIndex = 0;

function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  currentIndex = index;
  slides[currentIndex].classList.add('active');
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

setInterval(nextSlide, 4000);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const index = parseInt(button.getAttribute('data-index'));
    showSlide(index);
  });
});

/* slider */
