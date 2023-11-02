const preloader = document.getElementById("preloader");
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden")
}, 1000);


let topIcon = document.getElementById("top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topIcon.style.display = "flex";
  }
  else {
    topIcon.style.display = "none";
  }
});

function up() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

$('.slider-1').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1.75,
        dots: true,
        speed: 500,
        infinite: true,
        slidesToScroll: 2

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.75,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-2').slick({
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '400px',
  arrows: false,
  responsive: [

    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }

    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
}
);

$('.slider-3').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1.6,
  centermode: true,
  centerPadding: 100,
  arrows: false,
  slidesToScroll: 1,
  responsive: [

    {
      breakpoint: 992,
      settings: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1.6,
        arrows: false,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
      }
    },
  ]
});



let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let loadtake = document.querySelector(".nav-logo")
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer")
let bgbody = document.querySelector(".bg-bodys");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
nav.addEventListener("click", function () {
  menubar.classList.toggle("left-0")
  nav.classList.toggle("nav-bg")
  nav.classList.toggle("nav-2")
  span1.classList.toggle("nav1")
  span2.classList.toggle("nav2")
  span3.classList.toggle("nav3")
  overlay.classList.toggle("left-0")
  bgbody.classList.toggle("over-flow")
})
overlay.addEventListener("click", function () {
  menubar.classList.toggle("left-0")
  span1.classList.toggle("nav1")
  nav.classList.toggle("nav-bg")
  span2.classList.toggle("nav2")
  span3.classList.toggle("nav3")
  overlay.classList.toggle("left-0")
  bgbody.classList.toggle("over-flow")
})
finish.forEach(e => {
  e.addEventListener("click", function () {
    menubar.classList.remove("left-0")
    span1.classList.toggle("nav1")
    nav.classList.toggle("nav-bg")
    span2.classList.toggle("nav2")
    span3.classList.toggle("nav3")
    bgbody.classList.remove("over-flow")
    overlay.classList.toggle("left-0")
    span2.classList.toggle("nav2")
    span3.classList.toggle("nav3")
  })
});
