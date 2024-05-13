//Event Listener for DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  //Variables and Constant Initialization
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const sliderItems = document.querySelectorAll(".slider-item");
  let currentIndex = 0;
  let intervalId;

  //Slider Functions
  function showSlide(index) {
    sliderItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= sliderItems.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = sliderItems.length - 1;
    }
    showSlide(currentIndex);
  }
  //Auto slide and Button Event Listener
  function startAutoSlide() {
    intervalId = setInterval(nextSlide, 3000); // Adjust interval timing as needed
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
  });

  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
  });

  startAutoSlide();
});
