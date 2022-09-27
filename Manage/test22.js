const btn2 = document.querySelector("button");
const dropdownContent2 = document.querySelector(".dropdown-content2");

document.addEventListener("click",(e)=>{
    const target = e.target;
    target.closest("[data-dropdown2]") || dropdownContent2.classList.remove("active");
});

btn2.addEventListener("click", () => {
    dropdownContent2.classList.toggle("active");
});