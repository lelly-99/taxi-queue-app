function TaxiQueue() {

	var passenger = 0
	var taxi = 0
	
	function joinQueue() {
		passenger++
	}

	function leaveQueue() {
		if (passenger > 0) {
			passenger--;
		  }
	}

	function joinTaxiQueue() {
		taxi++
	}

	function queueLength() {
		return passenger
	}

	function taxiQueueLength() {
		return taxi
	}

	function taxiDepart(){
		if(passenger === 12){
			taxi--
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}