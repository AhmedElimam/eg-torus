// explore
document.addEventListener("DOMContentLoaded", function() {
    var exploreLink = document.getElementById("explore-link");
    var exploreDropdown = document.getElementById("explore-dropdown");

    exploreLink.addEventListener("mouseenter", function() {
        exploreDropdown.style.display = "block";
    });
    exploreDropdown.addEventListener("mouseleave", function() {
        exploreDropdown.style.display = "none";
    });
    document.addEventListener("click", function() {
        exploreDropdown.style.display = "none";
    });
    exploreDropdown.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
//
//contact
document.addEventListener("DOMContentLoaded", function() {
    var exploreLink = document.getElementById("contact-link");
    var exploreDropdown = document.getElementById("dropdown");

    exploreLink.addEventListener("mouseenter", function() {
        exploreDropdown.style.display = "block";
    });
    exploreDropdown.addEventListener("mouseleave", function() {
        exploreDropdown.style.display = "none";
    });
    document.addEventListener("click", function() {
        exploreDropdown.style.display = "none";
    });
    exploreDropdown.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
//
    function toggleMenu() {
    var submenu = document.getElementById("submenu");
    submenu.classList.toggle("open-menu"); // ÅÖÇÝÉ/ÅÒÇáÉ ÝÆÉ .open-menu
}
    function toggleMenu() {
    var submenu = document.getElementById("submenu");
    submenu.classList.toggle("open-menu"); // ÅÖÇÝÉ/ÅÒÇáÉ ÝÆÉ .open-menu
}
//
//share
document.getElementById('facebook-link').addEventListener('click', function() {
    window.open('https://www.facebook.com/', '_blank');
});
document.getElementById('twitter-link').addEventListener('click', function() {
    window.open('https://twitter.com/', '_blank');
});
document.getElementById('email-link').addEventListener('click', function() {
    window.open('https://gmail.com', '_blank');
});
document.getElementById('whatsapp-link').addEventListener('click', function() {
    window.open('https://whatsapp.com', '_blank');
});
document.getElementById('telegram-link').addEventListener('click', function() {
    window.open('https://web.telegram.org/a/', '_blank');
});
//2
document.addEventListener("DOMContentLoaded", function() {
    const viewBtn = document.querySelector(".view-modal");
    const popup = document.querySelector(".popup");
    const close = popup.querySelector(".close");
    const field = popup.querySelector(".field");
    const input = field.querySelector("input");
    const copy = field.querySelector("button");
  
    viewBtn.addEventListener("click", function() {
      popup.classList.toggle("show");
    });
  
    close.addEventListener("click", function() {
      viewBtn.click();
    });
  
    copy.addEventListener("click", function() {
      input.select();
      document.execCommand("copy");
      this.innerText = "Copied!";
      setTimeout(() => {
        this.innerText = "Copy";
      }, 2000);
    });
  });
  // rate
  var ratingValue; 
  function openRatingBox() {
      var ratingBox = document.getElementById("ratingBox");
      ratingBox.style.display = "block";
  }
  function closeRatingBox() {
      var ratingBox = document.getElementById("ratingBox");
      ratingBox.style.display = "none";
      console.log("Êã ÍÝÙ ÇáÊÞííã:", ratingValue);
  }
function saveRating(element) {
  var ratingValue = element.value;
  localStorage.setItem("rating", ratingValue);
}
