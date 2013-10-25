function CalendarCtrl($scope) {
	var d = new Date();
	var currentMonth = d.getMonth();	
	$scope.year = d.getFullYear();

	$scope.bookings = [
		{who: "Asier", from: new Date(2013,9,12) , to: new Date(2013,9,25)},
		{who: "Jorge", from: new Date(2013,9,01) , to: new Date(2013,9,02)},
		{who: "Henry", from: new Date(2013,9,26) , to: new Date(2013,9,29)}
	];

	var monthNames = ["January", "February", "March", "April", "May", "June", 
					"July", "August", "September", "October", "November", "December"];	

	$scope.month = function () {
		return monthNames[currentMonth];
	};

	$scope.previousMonth = function () {
		if (currentMonth == 0) {
			currentMonth = 11;
			$scope.year--
		} else {
			currentMonth--;
		}
	};

	$scope.nextMonth = function () {
		if (currentMonth == 11) {
			currentMonth = 0;
			$scope.year++
		} else {
			currentMonth++;
		}		
	};
}