const btn = document.querySelector("button");
const dropdownContent = document.querySelector(".dropdown-content");

document.addEventListener("click",(e) => {
    const target = e.target;

    target.closest("[data-dropdown]") || dropdownContent.classList.remove("active");
});
btn.addEventListener("click",() => {
    dropdownContent.classList.toggle("active");
});
