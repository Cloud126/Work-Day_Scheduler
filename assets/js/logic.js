var currentDayEl = $("#currentDay");
var containerEl = $(".container");
var currentDay = (moment().format("dddd MMMM Do"));

//Function to display dynamically display time//
var update = function () {
    var date = moment(new Date())
    currentDayEl.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};
update();
setInterval(update, 1000);


//Array for times//
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
//military time//
var milTime = ["9", "10 ", "11", "12", "13", "14", "15", "16", "17"];

//For loop to loop through milTime and times
for (var i = 0; i < 9; i++) {

    //dynamic html elements//
    var row = $("<div>");
    var spanTime = $("<span>")
    var timeBlock = $("<div>");
    var textArea = $("<textarea>");
    var saveBtn = $("<button>");
    
    //adds value and id to textarea div
    textArea.attr('value', milTime[i]);
    var textId = textArea.attr('id', milTime[i]);
    
    //displays hour for each row//
    timeBlock.text(times[i]);

    //adds data value to each button
    saveBtn.attr("value", milTime[i]);
    saveBtn.attr("id", times[i]);

    //adds style to elements//
    row.addClass("row input-group mb-0.1");
    timeBlock.addClass("timeBlock input-group-text col-1 hour");
    textArea.addClass("textArea description col-10");
    saveBtn.addClass("saveBtn fas fa-save col-1");

    //appends html elements//
    containerEl.append(row);
    row.append(timeBlock);
    row.append(textArea);
    row.append(saveBtn);

    //Gets current hour of the day
    var currentHour = new Date().getHours();

    //Converts milTime array to interger
    var hourRow = parseInt(milTime[i]);

    var update = function () {
    var mil24 = moment().format("HH")
    
    var parse = parseInt(mil24)
    if(hourRow === parse){
        textId.addClass("present")
    } else if (hourRow > parse) {
        textId.addClass("future")
    } else {
        textId.addClass("past")
    }
    console.log(parse)
};

 update();
 setInterval(update, 1000);      
    // if(hourRow === currentHour){
    //     textId.addClass("present")
    // } else if (hourRow > currentHour) {
    //     textId.addClass("future")
    // } else {
    //     textId.addClass("past")
    // }
    var storedText = localStorage.getItem(times[i])
   
    if(storedText) {
        textId.text(storedText)
    }
  
    //saveBtn that targets each button value
    saveBtn.click(function (e) {
    var textAreaVal = $(this).prev().val();
    var time = this.id
    window.saved = localStorage.setItem(time, textAreaVal);
    });
 
};


// var update = function () {
//     //var date = moment(new Date())
//     mil24 = moment().format("HH")
//     var parse = parseInt(mil24)
//     if(hourRow === parse){
//         textId.addClass("present")
//     } else if (hourRow > parse) {
//         textId.addClass("future")
//     } else {
//         textId.addClass("past")
//     }
//     console.log(hourRow)
// };

// update();
// setInterval(update, 1000);