function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  }
  
  window.addEventListener("scroll", function() {
    var button = document.getElementById("goTopBtn");
    if (window.pageYOffset > 600) { 
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });

/* Open */
function openNav() {
  document.getElementById("myNav").style.width = "100%"; 
  document.getElementById("myNav").style.right = "0"; 
};

/* Close */
function closeNav() {
  document.getElementById("myNav").style.width = "0"; 
  document.getElementById("myNav").style.right = "-100%"; 
};

