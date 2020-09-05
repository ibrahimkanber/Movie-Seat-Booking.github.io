const container = document.querySelector(".containers")
const seatAll = document.querySelectorAll(".row .seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movieselect");


///Save selected movie index and price
let setMovieData = (movieIndex, optionValue) => {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", optionValue)

}

///Total Price and Ticket counter
let ticketPrice = +movieSelect.value;
let updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const indexOfSeats = [...selectedSeats].map(seat => [...seatAll].indexOf(seat))
    console.log(indexOfSeats)
    localStorage.setItem("selectedSeats", JSON.stringify(indexOfSeats))

    const counter = selectedSeats.length;
    count.innerHTML = counter;
    total.innerHTML = ticketPrice * counter
};
////movie select
movieSelect.addEventListener("change", e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    console.log(typeof e.target.selectedIndex, typeof e.target.value);
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