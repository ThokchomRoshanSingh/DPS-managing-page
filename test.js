const btn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

document.addEventListener("click",(e) => {
    const target = e.target;

    target.closest("[data-dropdown]") || dropdownContent.classList.remove("active");
});
btn.addEventListener("click",() => {
    dropdownContent.classList.toggle("active");
});


const usertable = document.querySelector("#usertable");

// fetch is asynchronous and returns a promise which can be resolved with .then() and .catch()
// fetch("./data.json")
//     .then((res) => res.json())
//     .then((data) => {
//        data.forEach((item) => {
//             usertable.innerHTML += `
//                 <tr>
//                     <td>${item.username}</td>
//                     <td>${item.empName}</td>
//                     <td>${item.branchOffice}</td>
//                     <td>${item.name}</td>
//                     <td>${item.furigana}</td>
//                     <td>${item.facePhoto}</td>
//                     <td>${item.activeState}</td>
//                 </tr>
//             `
//        })
//     })
//     .catch(err => {
//         console.error(err);
//     })

const menuBtn = document.querySelector(".bar1")
const menuContent = document.querySelector(".menu-content")
const closeBtn = document.querySelector(".close")

menuBtn.addEventListener("click", () => {
    menuContent.classList.add('open')
})

closeBtn.addEventListener("click", () => {
    menuContent.classList.remove('open');
});




async function getData() {
    const res =  await fetch("./data.json")
    const jsonData = await res.json()

    jsonData.forEach((item) => {
        usertable.innerHTML += `
            <tr>
                <td>${item.username}</td>
                <td>${item.empName}</td>
                <td>${item.branchOffice}</td>
                <td>${item.name}</td>
                <td>${item.furigana}</td>
                <td>${item.facePhoto}</td>
                <td>${item.activeState}</td>
            </tr>
        `
   })
}

getData()