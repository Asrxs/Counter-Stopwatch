// COUNTER

var count = 0;
var counter = document.getElementById("counter");

var redButton = document.getElementById("button--red");
var greenButton = document.getElementById("button--green");

redButton.onclick = function () {
    if (count > -10)
        count -= 1;
    else {
        count = 0;
    }
    counter.innerText = count;
}

greenButton.onclick = function () {
    if (count < 10)
        count += 1;
    else {
        count = 0;
    }
    counter.innerText = count;
}

// STOPWATCH

var watch = document.getElementById("stopwatch");
var startButton = document.getElementById("button--start");

var seconds = 0;
var minutes = 0;
var everySecond;

startButton.onclick = function () {
    everySecond = setInterval(function () {
        seconds += 1;
        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }
        if (seconds > 9) {
            watch.innerText = minutes + ":" + seconds;
        } else {
            watch.innerText = minutes + ":0" + seconds;
        }
    }, 1000)
}

var stopButton = document.getElementById("button--stop");
stopButton.onclick = function () {
    clearInterval(everySecond);
}
