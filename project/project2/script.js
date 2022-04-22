let slideIndex = 1;
showSlides(slideIndex);

function showSlides(pos) {
    let slides = document.getElementsByClassName("slide");

    if (pos < 1) {
        slideIndex = slides.length;
    }
    else if (pos > slides.length) {
        slideIndex = 1;
    }

    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function plusSlides(pos) {
    showSlides(slideIndex += pos);
}
