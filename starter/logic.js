// Display the current day at the top of the calendar when a user opens the planner
//Use moment.js
let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//These times will be stored in the localStorage
let times = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],

}
//Add times to the local storage
//Load times from the local storage to allow uses to set tasks
let setTimes = function () {
    localStorage.setItem("times", JSON.stringify(times));
}

let getTimes = function () {

    let findTimes = JSON.parse(localStorage.getItem("times"));
    if (findTimes) {
        times = findTimes
    }

    $.each(times, function (hour, times) {
        let hours = $("#" + hour);
        createTime(times, hours);
    })
}

//To be used to create input in a row that matches the hour
let createTime = function (timeText, hours) {

    let create = hours.find(".task");
    let taskPara = $("<p>")
        .addClass("dailyInput")
        .text(timeText)
    create.html(taskPara);
}


//DOM manipulation for the timeblocks stating time of day
//Timeblocks need to include hour of day and be interactive with the ability to be write in and be saved 



// Present time blocks for standard business hours when the user scrolls down

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock

// Persist events between refreshes of a page
getTimes();