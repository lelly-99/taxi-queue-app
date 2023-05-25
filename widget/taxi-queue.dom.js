// write your DOM code here.


// DOM element references
var passenger = document.querySelector(".passenger_queue_count")
var joinButton = document.querySelector(".join_queue")
var leaveButton = document.querySelector(".leave_queue")
var taxi = document.querySelector(".taxi_queue_count")
var taxiJoinButton = document.querySelector(".join_taxi_queue")
var departButton = document.querySelector(".depart")
// create Factory Function instance

var passengers = JSON.parse(localStorage.getItem("passengers")) || 0;

passenger.innerHTML = passengers;

const taxiQueue = TaxiQueue();

// DOM events
joinButton.addEventListener('click', function () {
    passenger.innerHTML = taxiQueue.joinQueue()
});


leaveButton.addEventListener('click', function () {
    passenger.innerHTML = taxiQueue.leaveQueue()
});

taxiJoinButton.addEventListener('click', function () {
    taxi.innerHTML = taxiQueue.joinTaxiQueue()
});

departButton.addEventListener('click', function () {
    taxi.innerHTML = taxiQueue.leaveTaxiQueue()
});

