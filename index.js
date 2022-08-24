// Your code here
function createEmployeeRecord (array) {
    let employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

function createEmployeeRecords(array) {
    return array.map(function(employee) {
        return createEmployeeRecord(employee)
    });
}


function createTimeInEvent (obj, dateAndTime) {
    let date = dateAndTime.split(' ');
    let hours = parseInt(date[1]);
    let timeInDate = date[0];
    obj.timeInEvents.push({type: 'TimeIn', hour: hours, date:timeInDate});
    return obj
}

function createTimeOutEvent (obj, dateAndTime) {
    let date = dateAndTime.split(' ');
    let hours = parseInt(date[1]);
    let timeOutDate = date[0];
    obj.timeOutEvents.push({type: 'TimeOut', hour: hours, date:timeOutDate}); 
    return obj
}

function hoursWorkedOnDate (obj, date) {
    // .find() function that has the functionality to parse Ints
    let inEvent = obj.timeInEvents.find(element => element.date === date)
    let outEvent = obj.timeOutEvents.find(element => element.date === date)
    return (outEvent.hour - inEvent.hour) / 100;
}

function wagesEarnedOnDate (obj, date) {
    return hoursWorkedOnDate(obj, date) * obj.payPerHour;
}

function allWagesFor (obj) {
    let init = 0;
    // create a function to grab each date?
    let dates = obj.timeInEvents.map(element => element.date)
    for (let element of dates) {
        init += wagesEarnedOnDate(obj, element) 
        // init + wagesEarnedOnDate(obj, element);
    }
    // return the final value
    return init
    // grab each date and run the wagesEarnedOnDate function
}

function calculatePayroll (employeeRecords) {
    // What exactly am I missing here functionality-wise?
    // iterator method or for loop that iterates through array of records
    let init = 0;
    for (let element of employeeRecords) {
        init += allWagesFor(element);
    }
    return init
}

