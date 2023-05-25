function TaxiQueue() {

	var passenger = 0
	var taxi = 0
	
	function joinQueue() {
		var join = passenger++
		return join
	}

	function leaveQueue() {
		if (passenger > 0) {
			var leave = passenger--;
		  }
		  return leave;
	}


	function joinTaxiQueue() {
		var joinTaxi = taxi++
		return joinTaxi
	}

	function queueLength() {
		return passenger
	}

	function taxiQueueLength() {
		return taxi
	}

	function taxiDepart(){
		if(taxi && passenger === 12){
			var depart = taxi--
		}
		return depart
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