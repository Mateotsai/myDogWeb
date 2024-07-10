//繼續閱讀的按鈕
function indexMyFunction(dotsId, moreId) {
    var dots = document.getElementById(dotsId);
    var moreText = document.getElementById(moreId);
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "繼續閱讀";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "隱藏";
      moreText.style.display = "inline";
    }
  }



//   幻燈片
let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
    plusSlides(1);}, 2500);
 


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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