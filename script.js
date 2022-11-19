// Scroll
let progress = document.querySelector("#progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 102;
    progress.style.height = progressHeight + '%';
}

// Reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);

// Overlay
let imgs = document.querySelectorAll(".gal-card");
let overlays = document.querySelectorAll(".gal-overlay");

for(overlay of overlays){
    overlay.addEventListener('click', img_overlay);
}

function img_overlay(){
    this.classList.add("active");
}
