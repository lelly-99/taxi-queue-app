// write your DOM code here.


// // DOM element references
var passenger = document.querySelector(".passenger_queue_count");
var joinButton = document.querySelector(".join_queue");
var leaveButton = document.querySelector(".leave_queue");
var taxi = document.querySelector(".taxi_queue_count");
var taxiJoinButton = document.querySelector(".join_taxi_queue");
var departButton = document.querySelector(".depart");
var depart = document.querySelector(".taxi_depart_count")

// create Factory Function instance
var passengers = JSON.parse(localStorage.getItem("passengers")) || 0;
passenger.innerHTML = passengers;

const taxiQueue = TaxiQueue();

// DOM events
joinButton.addEventListener("click", function () {
  taxiQueue.joinQueue();
  passenger.innerHTML = taxiQueue.queueLength();
});

leaveButton.addEventListener("click", function () {
  taxiQueue.leaveQueue();
  passenger.innerHTML = taxiQueue.queueLength();
});

taxiJoinButton.addEventListener("click", function () {
  taxi.innerHTML = taxiQueue.joinTaxiQueue();
});

departButton.addEventListener("click", function () {
  depart.innerHTML = taxiQueue.taxiDepart();
});

