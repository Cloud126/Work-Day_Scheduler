
var currentDayEl = $("#currentDay");
var containerTime = $(".container");

//Displays Current date on currentDay p tag//
var currentDay = (moment().format("dddd MMMM Do"));
currentDayEl.html(currentDay);



