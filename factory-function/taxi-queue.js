function TaxiQueue() {

	var passenger = 0
	var taxi = 0
	var passengers = 12 * passenger
	
	function joinQueue() {
		passenger++
	}

	function leaveQueue() {
		if (passenger > 0) {
			passenger--;
		  }
	}

	function joinTaxiQueue() {
		if(passenger === passengers){
			taxi++
		}
	}

	function queueLength() {
		return passenger
	}

	function taxiQueueLength() {
		return taxi
	}

	function taxiDepart(){
		if(passenger === passengers){
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