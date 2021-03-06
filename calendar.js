function CalendarCtrl($scope) {
    "use strict";
    var monthIndex = 0,
        monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

    $scope.year = 0;
    $scope.days = [];

    function numbeOfDaysInMonth(month) {
        switch (monthNames[month]) {
        case "February":
            return 28;
        case "April":
        case "June":
        case "September":
        case "November":
            return 30;

        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            return 31;
        }
    }

    function createDaysNonThisMonth(min, max) {
        var days = [],
            i;
        for (i = min; i <= max; i += 1) {
            days.push({value: i, isNotThisMonth: true});
        }
        return days;
    }

    function createDaysThisMonth(num) {
        var days = [],
            i;
        for (i = 1; i <= num; i += 1) {
            days.push({value: i});
        }
        return days;
    }

    function createDaysPreviousMonth() {
        var firstDayOfMonth = new Date($scope.year, monthIndex, 1, 0, 0, 0, 0),
            firstDayOfMonthIndex = firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay(),
            previousMonth = monthIndex === 0 ? 11 : monthIndex - 1,
            numOfDaysPreviousMonth = numbeOfDaysInMonth(previousMonth),
            mondayPreviousMonth = numOfDaysPreviousMonth - firstDayOfMonthIndex + 2;

        return createDaysNonThisMonth(mondayPreviousMonth, numOfDaysPreviousMonth);
    }

    function createDaysNextMonth() {
        var lastDayOfMonth = new Date($scope.year, monthIndex, numbeOfDaysInMonth(monthIndex), 0, 0, 0, 0),
            lastDayOfMonthIndex = lastDayOfMonth.getDay() === 0 ? 7 : lastDayOfMonth.getDay(),
            daysleftOnWeek = 7 - lastDayOfMonthIndex;

        return createDaysNonThisMonth(1, daysleftOnWeek);
    }

    function drawCalendar() {
        $scope.days = createDaysPreviousMonth()
            .concat(createDaysThisMonth(numbeOfDaysInMonth(monthIndex)))
            .concat(createDaysNextMonth());
    }

    $scope.month = function () {
        return monthNames[monthIndex];
    }

    $scope.goToPreviousMonth = function () {
        if (monthIndex == 0) {
            monthIndex = 11;
            $scope.year--
        } else {
            monthIndex--;
        }

        drawCalendar();
    }

    $scope.goToNextMonth = function () {
        if (monthIndex == 11) {
            monthIndex = 0;
            $scope.year++
        } else {
            monthIndex++;
        }

        drawCalendar();
    }

    function initialise() {
        var d = new Date();
        monthIndex = d.getMonth();
        $scope.year = d.getFullYear();

        drawCalendar();
    }

    initialise();
};