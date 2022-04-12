var swiper = new Swiper("#slider-1", {
  pagination: {
    el: "#slider-1-pagination"
  },
  loop: true,
  navigation: {
    nextEl: "#slider-1-next",
    prevEl: "#slider-1-prev",
  },
});


var swiper = new Swiper("#slider-2", {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: "#slider-2-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#slider-2-next",
    prevEl: "#slider-2-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2
    }
  },
});


// accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}