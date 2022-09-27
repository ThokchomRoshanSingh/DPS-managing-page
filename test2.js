const btn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

document.addEventListener("click",(e) => {
    const target = e.target;

    target.closest("[data-dropdown]") || dropdownContent.classList.remove("active");
});
btn.addEventListener("click",() => {
    dropdownContent.classList.toggle("active");
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}