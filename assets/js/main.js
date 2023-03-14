// const menuItem = document.querySelectorAll('.menu-item');
// const list = document.querySelectorAll('.list');

// menuItem.addEventListener('mouseout', () => {
//   console.log(list.classList)
// });


//SLIDESHOW

var slideIndex = 0;
showSlides(slideIndex);

// Tự động chuyển slide sau mỗi 5 giây
setInterval(function() { plusSlides(1); }, 7000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }


