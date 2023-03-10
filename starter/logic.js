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
// Allow a user to enter an event when they click a timeblock
//Add times to the local storage
//Load times from the local storage to allow uses to set tasks
let setTimes = function () {
    localStorage.setItem("times", JSON.stringify(times));
}

let getTimes = function () {

    let findTimes = JSON.parse(localStorage.getItem("times"));
    if (findTimes) {
        times = findTimes

        $.each(times, function (hour, times) {
            let hours = $("#" + hour);
            createTime(times, hours);
        })
    }
    updateTask()
}

//To be used to create input in a row that matches the hour
let createTime = function (timeText, hours) {

    let create = hours.find(".task");
    let taskPara = $("<p>")
        .addClass("description")
        .text(timeText)
    create.html(taskPara);
}
//This function will update the background as the day progresses
let updateTask = function () {
    let currentHour = moment().hour();
    $(".tInfo").each(function () {
        let hourEl = parseInt($(this).attr("id"));

        if (hourEl < currentHour) {
            $(this).removeClass(["present", "future"]).addClass("past");
        }
        else if (hourEl === currentHour) {
            $(this).removeClass(["past", "future"]).addClass("present");
        }
        else {
            $(this).removeClass(["past", "present"]).addClass("future");
        }
    })
};

let changeTextArea = function (textAreaEl) {
    let taskInfo = textAreaEl.closest(".tInfo");
    let textArea = taskInfo.find("textarea");

    var chrono = taskInfo.attr("id");
    let text = textArea.val().trim();

    tasks[chrono] = [text]
    setTimes();
    createTime(text, taskInfo);
}

//click buttons
$(".task").click(function () {

    //save tasks
    $("textarea").each(function () {
        changeTextArea($(this));
    })

    //change to textarea element based on time
    let chrono = $(this).closest(".tInfo").attr("id");
    if (parseInt(chrono) >= moment().hour()) {

        let text = $(this).text();
        let textInput = $("<textarea>")
            .addClass("form-control")
            .val(text);

        $(this).html(textInput);
        textInput.trigger("focus");
    }
})
getTimes();