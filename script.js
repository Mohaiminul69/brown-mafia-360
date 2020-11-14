let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "style") {
    document.getElementById("theme-style").href = "style.css";
  }
  if (mode == "red") {
    document.getElementById("theme-style").href = "red.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }
}

let slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("yes");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("yes");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 7000);
}

$(".btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("#main-nav .container").addClass("black");
  } else {
    $("#main-nav .container").removeClass("black");
  }
});

// Slide 2

//slide 2

let slideIndex2 = 0;
showDivs2(slideIndex2);

function showDivs2(n) {
  let i;
  let x = document.getElementsByClassName("phone");
  if (n > x.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2 - 1].style.display = "block";
}
carousel2();

function carousel2() {
  let i;
  let x = document.getElementsByClassName("phone");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {
    slideIndex2 = 1;
  }
  x[slideIndex2 - 1].style.display = "block";
  setTimeout(carousel2, 5000);
}

// slide 3

let slideIndex3 = 0;
showDivs2(slideIndex3);

function showDivs3(n) {
  let i;
  let x = document.getElementsByClassName("cars");
  if (n > x.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex3 - 1].style.display = "block";
}
carousel3();

function carousel3() {
  let i;
  let x = document.getElementsByClassName("cars");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > x.length) {
    slideIndex3 = 1;
  }
  x[slideIndex3 - 1].style.display = "block";
  setTimeout(carousel3, 5000);
}
