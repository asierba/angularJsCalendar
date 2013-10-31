function CalendarCtrl($scope) {
	var d = new Date();
	var currentMonth = d.getMonth();	
	$scope.year = d.getFullYear();

        var monthNames = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];      

        var calculateDaysForMonth = function (month) {
                if(monthNames[month] === "February") {
                      return new Array(28);  
                }
                if(monthNames[month] === "April") {
                      return new Array(30);  
                }

                return new Array(31);
        };

        $scope.days = calculateDaysForMonth(currentMonth);	

	$scope.month = function () {
		return monthNames[currentMonth];
	};

	$scope.previousMonth = function () {
                $scope.days = new Array(11);

		if (currentMonth == 0) {
			currentMonth = 11;
			$scope.year--
		} else {
			currentMonth--;
		}

                $scope.days = calculateDaysForMonth(currentMonth);
	};

	$scope.nextMonth = function () {
                $scope.days = new Array(66);

		if (currentMonth == 11) {
			currentMonth = 0;
			$scope.year++
		} else {
			currentMonth++;
		}

                $scope.days = calculateDaysForMonth(currentMonth);		
	};
}