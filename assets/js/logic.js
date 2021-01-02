var currentDayEl = $("#currentDay");
var containerEl = $(".container");
var currentDay = (moment().format("dddd MMMM Do"));

//Displays Current date on currentDay p tag//
currentDayEl.html(currentDay);

//Array for times//
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
//military time//
var milTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

for (var i = 0; i < times.length; i++) {

    //dynamic html elements//
    var row = $("<div>")
    var timeBlock = $("<div>")
    var textArea = $("<textarea>")
    var saveBtn = $("<button>")
    
    //adds value and id to textarea div
    textArea.attr('value', milTime[i])
    var textId = textArea.attr('id', milTime[i])
    
    //displays hour for each row//
    timeBlock.text(times[i])

    //adds data value to each button
    saveBtn.attr("value", milTime[i]);

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

    //saveBtn that targets each button value
    saveBtn.click(function (e) {
    console.log($(this).prev().val())
    });

    var currentHour = new Date().getHours()

    //Converts milTime array to interger
    var hourRow = parseInt(milTime[i])

    //Color codes textarea depending on current time
    if(hourRow === currentHour){
        textId.addClass("present")
    } else if (hourRow > currentHour) {
        textId.addClass("future")
    } else if(hourRow < currentHour) {
        textId.addClass("past")
    }
    
};

    




