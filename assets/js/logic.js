var currentDayEl = $("#currentDay");
var containerEl = $(".container");
var currentDay = (moment().format("dddd MMMM Do"));

//Displays Current date on currentDay p tag//
currentDayEl.html(currentDay);

//Array for times//
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


//Creates time blocks//
for (var i = 0; i < times.length; i++) {

    //dynamic html elements//
    var row = $("<div>")
    var timeBlock = $("<div>")
    var textArea = $("<textarea>")
    var spanTime = $("<span>")
    var btnDiv = $("<div>")
    var saveBtn = $("<button>")
    
    //displays hour for each row//
    timeBlock.text(times[i])
    
    //adds data value to each button
    saveBtn.attr("id", times[i]);
    
    //adds id to row div//
    textArea.attr("data-time", times[i])
    
    //adds style to elements//
    row.addClass("rowDiv input-group mb-0.1 row");
    timeBlock.addClass("timeBlock input-group-prepend col-1 hour");
    textArea.addClass("textArea description col-10");
    saveBtn.addClass("saveBtn fas fa-save col-1")
    
    //appends html elements//
    containerEl.append(row);
    row.append(timeBlock);
    row.append(textArea);
    row.append(saveBtn);
    
    var currentHour = parseInt(moment().format('LT'));
    var hourBlock = parseInt(times[i])

    if(hourBlock < currentHour){
        $(".textArea").addClass("future")
    }
   
   
};







