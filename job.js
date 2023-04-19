
// carousel on the history page
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("carousel__slides");
  let dots = document.getElementsByClassName("carousel__dot");
  if (n > slides.length){slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  //if (window.matchMedia("(max-width: 700px)").matches){       //not working
    // if (screen.width <= "700px"){}
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none"; 
  
  console.log("true")
}
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}


// Accordion starts here
let schedule = document.getElementsByClassName("schedule1")
function myActive(){
  for (i=0; i < schedule.length; i++){schedule[0].style.display = "block"}

  console.log("working")
}
document.getElementsByClassName("mountain1").addEventListener("click", myActive)