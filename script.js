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

let slideIndex1 = 0;
showDivs1(slideIndex1);

function plusDivs(n) {
  showDivs1((slideIndex1 += n));
}

function showDivs1(n) {
  let i;
  let x = document.getElementsByClassName("phone");
  if (n > x.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex1 - 1].style.display = "block";
}
carousel1();

function carousel1() {
  let i;
  let x = document.getElementsByClassName("phone");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > x.length) {
    slideIndex1 = 1;
  }
  x[slideIndex1 - 1].style.display = "block";
  setTimeout(carousel1, 7000);
}

