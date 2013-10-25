function CalendarCtrl($scope) {
	var d = new Date();
	var currentMonth = d.getMonth();	
	$scope.year = d.getFullYear();

	$scope.days = [
        null,       // 0
        "Asier",    // 1
        "Asier",    // 2
        "Asier",    // 3
         null,      // 4
         null,      // 5
         null,      // 6
         null,      // 7
         null,      // 8
         null,      // 9
         null,      // 10
         null,      // 11
         null,      // 12
         null,      // 13
         null,      // 14
         "Herny",   // 15
         "Herny",   // 16
         "Herny",   // 17
         "Herny",   // 18
         "Herny",   // 19
         "Herny",   // 20
         null,      // 21
         null,      // 22
         null,      // 23
         null,      // 24
         null,      // 25
         "Jorge",   // 26
         "Jorge",   // 27
         "Jorge",   // 28
         "Jorge",   // 29
         "Jorge",   // 30
         "Jorge",   // 31
	];

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