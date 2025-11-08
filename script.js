// Simple interactivity for portfolio pages
$(document).ready(function() {
  console.log("Portfolio of Chetan Kadesh B Patil loaded successfully!");
  
  // Optional: show a welcome alert when index page loads
  if (window.location.pathname.includes("index.html")) {
    alert("Welcome to Chetan Patil's Portfolio!");
  }

  // Example: smooth scroll for internal links (if used)
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = this.hash;
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 600);
  });
});
