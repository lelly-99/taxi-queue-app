function TaxiQueue() {
	var person = 0;
	var taxi = 0;
	var depart = 0;
  
	function joinQueue() {
	  person++;
	}
  
	function leaveQueue() {
	  if (person > 0) {
		person--;
	  }
	}
  
	function joinTaxiQueue() {
	  return ++taxi;
	}
  
	function queueLength() {
	  return person;
	}
  
	function taxiQueueLength() {
	  return taxi;
	}
  
	function taxiDepart() {
	  if (taxi > 0 && person >= 12) {
		depart++;
		person -= 12;
		taxi--;
	  }
	  return depart;
	}
  
	return {
	  joinQueue,
	  leaveQueue,
	  joinTaxiQueue,
	  queueLength,
	  taxiQueueLength,
	  taxiDepart,
	};
  }
  