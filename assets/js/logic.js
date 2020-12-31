var currentDayEl = $("#currentDay");
var containerEl = $(".container");
var currentDay = (moment().format("dddd MMMM Do"));

//Displays Current date on currentDay p tag//
currentDayEl.html(currentDay);

//Array for times//
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];



//Creates time blocks//
for (var i = 0; i < times.length; i++) {

    var row = $("<div>")
    var timeBlock = $("<div>")
    var textArea = $("<textarea>")
    var spanTime = $("<span>")
    var btnDiv = $("<div>")
    var saveBtn = $("<button>")

    spanTime.text(times[i])

    row.addClass("input-group mb-3");
    timeBlock.addClass("input-group-prepend");
    spanTime.addClass("input-group-text time-block")
    textArea.addClass("form-control");
    saveBtn.addClass("saveBtn fas fa-save")
    btnDiv.addClass("input-group-append")
    
    containerEl.append(row);
    row.append(timeBlock);
    row.append(textArea);
    row.append(btnDiv);
    
    btnDiv.append(saveBtn);
    timeBlock.append(spanTime);
    
};


