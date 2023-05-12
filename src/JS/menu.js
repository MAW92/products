function toggleMenu() {
  var menu=document.getElementById("mobile-menu");
  if(menu.style.display==="none") {
    menu.style.display="block";
    document.getElementById("menu-icon").style.display="none";
    document.getElementById("close-icon").style.display="block";
  } else {
    menu.style.display="none";
    document.getElementById("menu-icon").style.display="block";
    document.getElementById("close-icon").style.display="none";
  }
}

function hideMenuOnResize() {
  var x=document.getElementById("mobile-menu");
  var y=window.innerWidth;
  if(y>640) {
    x.style.display="none";
  }
}
window.addEventListener("resize",hideMenuOnResize);
hideMenuOnResize();