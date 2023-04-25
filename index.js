// Your code here
function createEmployeeRecord(testEmployee) {
    return {
        firstName: testEmployee[0],
        familyName: testEmployee[1],
        title: testEmployee[2],
        payPerHour: testEmployee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
};
function createEmployeeRecords(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
};
function createTimeInEvent(employeeRecord, dateStamp) {
    let [date, hour] = dateStamp.split(' ') 
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return employeeRecord
}
function createTimeOutEvent(employeeRecords, stampDate) {
    let [date, hour] = stampDate.split(' ')
    employeeRecords.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    })
    return employeeRecords
};
function hoursWorkedOnDate(record, date) {
    let timeIn = record.timeInEvents.find(event => event.date === date)
    let timeOut = record.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour) / 100
};
function wagesEarnedOnDate(employeeRecord, date) {
    return hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
};
function allWagesFor(employeeRecord) {
    let dates = employeeRecord.timeInEvents.map(event => event.date)
    return dates.reduce((totalWages, date) => totalWages + wagesEarnedOnDate(employeeRecord, date), 0)
};
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employeeRecord) => totalPayroll + allWagesFor(employeeRecord), 0)
}


