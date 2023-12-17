let mybutton = document.getElementById("btn-back-to-top");

window.onload = function(){
    document.getElementById("footer").innerHTML = getFooterText();
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {

  if (
    window.scrollY > 20 ||
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function getFooterText(){
    return `© ${new Date().getFullYear()} Claudia-Maria Munteanu. All rights reserved.`;
}