//Event Listener for DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  //Variables and Constant Initialization
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const wDSliderItems = document.querySelectorAll(".wd-slider-item");
  const dFSliderItems = document.querySelectorAll(".df-slider-item");
  let wDCurrentIndex = 0;
  let dFCurrentIndex = 0;

  let wDIntervalId;
  let dFIntervalId;

  //Slider Functions
  function wDShowSlide(index) {
    wDSliderItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function dFShowSlide(index) {
    dFSliderItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  //Navigation Function for Next Slider
  function wDNextSlide() {
    wDCurrentIndex++;
    if (wDCurrentIndex >= wDSliderItems.length) {
      wDCurrentIndex = 0;
    }
    wDShowSlide(wDCurrentIndex);
  }

  function dFNextSlide() {
    dFCurrentIndex++;
    if (dFCurrentIndex >= dFSliderItems.length) {
      dFCurrentIndex = 0;
    }
    dFShowSlide(dFCurrentIndex);
  }

  //Navigation Function for Previous Slider
  function wDPrevSlide() {
    wDCurrentIndex--;
    if (wDCurrentIndex < 0) {
      wDCurrentIndex = wDSliderItems.length - 1;
    }
    wDShowSlide(wDCurrentIndex);
  }

  function dFPrevSlide() {
    dFCurrentIndex--;
    if (dFCurrentIndex < 0) {
      dFCurrentIndex = dFSliderItems.length - 1;
    }
    dFShowSlide(dFCurrentIndex);
  }

  //Auto slide and Button Event Listener
  function startAutoSlide() {
    wDIntervalId = setInterval(wDNextSlide, 3000);
    dFIntervalId = setInterval(dFNextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(wDIntervalId);
    clearInterval(dFIntervalId);
  }

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    wDPrevSlide();
    dFPrevSlide();
  });

  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    wDNextSlide();
    dFNextSlide();
  });

  // Initial setup
  startAutoSlide();
  wDShowSlide(wDCurrentIndex);
  dFShowSlide(dFCurrentIndex);
});
