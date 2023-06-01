// write your DOM code here.
// DOM element references
var passenger = document.querySelector(".passenger_queue_count");
var joinButton = document.querySelector(".join_queue");
var leaveButton = document.querySelector(".leave_queue");
var taxi = document.querySelector(".taxi_queue_count");
var taxiJoinButton = document.querySelector(".join_taxi_queue");
var departButton = document.querySelector(".depart");
var depart = document.querySelector(".taxi_depart_count")


//local  storage for passengers
var passengers = localStorage.getItem("passengers") || 0;
passenger.innerHTML = passengers;

//local storage for taxis joining queue
var taxis = localStorage.getItem("taxis") || 0
taxi.innerHTML = taxis


//local storage for taxis departing
var departs = localStorage.getItem("departs") || 0
depart.innerHTML = departs





// create Factory Function instance
const taxiQueue = TaxiQueue(passengers, taxis, departs);

// DOM events
joinButton.addEventListener("click", function () {
  taxiQueue.joinQueue()
  passenger.innerHTML = passengers;
  passenger.innerHTML = taxiQueue.queueLength();
  localStorage.setItem("passengers", Number(taxiQueue.queueLength()))
});

leaveButton.addEventListener("click", function () {
  taxiQueue.leaveQueue()
  passenger.innerHTML = taxiQueue.queueLength();
  localStorage.setItem("passengers", Number(taxiQueue.queueLength()))
});

taxiJoinButton.addEventListener("click", function () {
  if (taxiQueue.joinTaxiQueue()) {
    taxi.innerHTML = taxis
    taxi.innerHTML = taxiQueue.taxiQueueLength();
    localStorage.setItem("taxis", Number(taxiQueue.taxiQueueLength()))
  }
});

departButton.addEventListener("click", function () {
  taxiQueue.joinQueue();
  taxiQueue.leaveQueue();

  depart.innerHTML = departs
  depart.innerHTML = taxiQueue.taxiDepart();
  localStorage.setItem("departs", Number(taxiQueue.taxiDepart()))

  if (taxiQueue.taxiDepart()) {
    passenger.innerHTML = taxiQueue.queueLength();
    localStorage.setItem("passengers", Number(taxiQueue.queueLength()))
    taxi.innerHTML = taxiQueue.taxiQueueLength();
    localStorage.setItem("taxis", Number(taxiQueue.taxiQueueLength()))
  }
});

