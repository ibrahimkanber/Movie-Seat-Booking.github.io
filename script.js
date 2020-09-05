const container = document.querySelector(".containers")
const seatAll = document.querySelectorAll(".row .seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movieselect");

populateUI();

///Save selected movie index and price


///Total Price and Ticket counter
let ticketPrice = +movieSelect.value;

let setMovieData = (movieIndex, optionValue) => {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", optionValue)

}

////update total

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const indexOfSeats = [...selectedSeats].map(seat => [...seatAll].indexOf(seat))
    localStorage.setItem("selectedSeats", JSON.stringify(indexOfSeats))

    const counter = selectedSeats.length;
    count.innerHTML = counter;
    total.innerHTML = ticketPrice * counter
};
////Get data from localStorage andd populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seatAll.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected")
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex")
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
        console.log(movieSelect.selectedIndex)
    }



}

////movie select
movieSelect.addEventListener("change", e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})


///Seat click event
seatAll.forEach((seat) => seat.addEventListener("click", (e) => {
    const classlist = e.target.classList;
    if (classlist.contains("seat") &&
        !classlist.contains("occupied")) {
        classlist.toggle("selected")
        updateSelectedCount();
    }
}))

updateSelectedCount()