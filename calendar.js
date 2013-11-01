function CalendarCtrl($scope) {
    var currentMonth = 0,
    	monthNames = ["January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"];

	var numbeOfDaysInMonth = function(month) {
		switch(monthNames[month])
    	{
    		case "February":
    			return 28;
    		break;

    		case "April":
    		case "June":
    		case "September":
    		case "November":
    			return 30;
    		break;
    		
    		case "January":
    		case "March":
    		case "May":
    		case "July":
    		case "August":
    		case "October":
    		case "December":
    			return 31;
    	}
	};

	var createDaysNonThisMonth = function(min, max) {
		var days = [];
		for(var i=min; i<= max; i++) {
			days.push({value: i, isNotThisMonth: true});
		}
		return days;
	};

    var createDaysPreviousMonth = function() {
    	var firstDayOfMonth = new Date($scope.year, currentMonth, 1, 0, 0, 0, 0);
		var firstDayOfMonthIndex = firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay();


		var previousMonth = currentMonth === 0 ? 11 : currentMonth-1;

		var numOfDaysPreviousMonth = numbeOfDaysInMonth(previousMonth);
		var mondayPreviousMonth = numOfDaysPreviousMonth-firstDayOfMonthIndex+2;

    	return createDaysNonThisMonth(mondayPreviousMonth, numOfDaysPreviousMonth);
    };

    var createDaysNextMonth = function() {    	
    	var lastDayOfMonth = new Date($scope.year, currentMonth, numbeOfDaysInMonth(currentMonth), 0, 0, 0, 0);
		var lastDayOfMonthIndex = lastDayOfMonth.getDay() === 0 ? 7 : lastDayOfMonth.getDay();
		var daysleftOnWeek = 7 - lastDayOfMonthIndex;
		
		return createDaysNonThisMonth(1, daysleftOnWeek);
    };

    var createDaysThisMonth = function(num) {    	
		var days = [];
		for(var i=1; i<= num; i++) {
			days.push({value: i});
		}
		return days;
	};

    var calculateDaysForMonth = function(month) {
    	return  createDaysThisMonth(numbeOfDaysInMonth(month));
    };  

    var drawMonth = function () {    	
		$scope.days = createDaysPreviousMonth()
			.concat(calculateDaysForMonth(currentMonth))
			.concat(createDaysNextMonth());	
    };   
  
	$scope.month = function() {
		return monthNames[currentMonth];
	};	

	$scope.previousMonth = function () {      
		if (currentMonth == 0) {
			currentMonth = 11;
			$scope.year--
		} else {
			currentMonth--;
		}

        drawMonth();
	};

	$scope.nextMonth = function() {
		if (currentMonth == 11) {
			currentMonth = 0;
			$scope.year++
		} else {
			currentMonth++;
		}

       	drawMonth();	
	};	

 	var initialise = function() {
		var d = new Date();
		currentMonth = d.getMonth();
		$scope.year = d.getFullYear();		

		drawMonth();		
	};	

	initialise();
}