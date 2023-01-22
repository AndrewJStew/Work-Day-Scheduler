// Variables I'm going to use throughout the code
let tasks = {
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



// Display the current day at the top of the calendar when a user opens the planner
//Use moment.js
let today = moment();
$("#currentDay").text(today.format)("dddd, MMMM Do");


//DOM manipulation for the timeblocks stating time of day
//Timeblocks need to include hour of day and be interactive with the ability to be write in and be saved 



// Present time blocks for standard business hours when the user scrolls down

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock

// Persist events between refreshes of a page