// Navigatiom

const navToggler = document.getElementById("nav-toggle");
navToggler.addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
});

// Banner Carousel
let slideIndex = 0;
let slider = document.querySelector(".slider");
let slides = slider.querySelector(".slides");
let slide = slides.querySelectorAll(".slideimg");
let dots = slider.querySelectorAll(".dots > span");

showslide();

function currentslide(index) {
  if (index > slide.length) {
    index = 1;
  } else if (index < 1) {
    index = slide.length;
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dots.length; i++) {
    const element = dots[i];
    element.classList.remove("active");
  }

  slides.style.left = `-${index - 1}00%`;
  dots[index - 1].classList.add("active");

  slideIndex = index;
}

function showslide() {
  slideIndex++;

  if (slideIndex > slide.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slide.length;
  }

  // Defaultly active class is removed from all dots
  for (let i = 0; i < dots.length; i++) {
    const element = dots[i];
    element.classList.remove("active");
  }

  slides.style.left = `-${slideIndex - 1}00%`;
  dots[slideIndex - 1].classList.add("active");
}

let interval = setInterval(() => {
  showslide();
}, 4000); // Change every image after 4 seconds

slider.addEventListener("mouseover", () => {
  clearInterval(interval); // onHover Stop Changing every image after 4 seconds
});

slider.addEventListener("mouseout", () => {
  interval = setInterval(() => {
    showslide();
  }, 4000); // on mouseout from slide then again start Changing every image after 6  seconds
});





$(document).ready(function () {
  $(".home-covidupdate__carousel").owlCarousel({
    margin: 25,
    loop: true,
    autoWidth: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      490: {
        center: false,
      },

      0: {
        center: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".home-blogs__carousel").owlCarousel({
    margin: 40,
    loop: true,
    autoWidth: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      490: {
        center: false,
      },

      0: {
        center: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".panel__carousel").owlCarousel({
    margin: 35,
    loop: true,
    autoWidth: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      490: {
        center: false,
      },

      0: {
        center: true,
      },
    },
  });
});

$(document).ready(function () {
  $(".client__carousel").owlCarousel({
    margin: 40,
    loop: true,
    autoWidth: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      490: {
        center: false,
      },

      0: {
        center: true,
      },
    },
  });
});
