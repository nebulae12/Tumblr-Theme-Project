upArrow = document.querySelector("#backToTop");

//Enable the scroll-to-top arrow button when user scrolls down enough
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    upArrow.style.display = "block";
  } else {
    upArrow.style.display = "none";
  }
}

//Clicking the button scrolls the user to the top of the page
upArrow.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
);
