const container = document.querySelector(".containers")
const seatAll = document.querySelectorAll(".seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movieselect");

let price = +movieSelect.value

console.log(price)



seatAll.forEach((seat) => seat.addEventListener("click", (e) => {
    const classlist = e.target.classList
    if (classlist.contains("seat") &&
        !classlist.contains("occupied")) {
        classlist.toggle("selected")
        console.log(classlist)
        updateSelectedCount();
    }
}))