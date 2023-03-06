
var hours = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

var interval;
var started = false;

function stopwatch() {
    seconds++;
    if (seconds % 60 === 0) {
        seconds = 0;
        minutes++;
        if (minutes % 60 === 0) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("display").innerHTML = hours + ":" + minutes +  ":" + seconds;
}

function changecolor() {
    document.getElementById("colorbutton").style.color = "white";
    interval = window.setInterval(()=>{
        if (document.getElementById("colorbutton").style.backgroundColor === "blue")
            document.getElementById("colorbutton").style.backgroundColor = "red";
        else
            document.getElementById("colorbutton").style.backgroundColor = "blue";
    },100);
}

function controller() {
    if (!started) {
        interval = window.setInterval(stopwatch,1000);
        document.getElementById("controller").innerHTML = "Stop";
        started = true;
    }
    else {
        reset();
        started = false;
    }
}

function reset() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "0:0:0"
    document.getElementById("controller").innerHTML = "Start";
}

var arr = [ {"id":"10", "class": "child-of-9"}, {"id":"11", "class": "child-of-10"}];

for (var i = 0; i < arr.length; i++){
  document.write("<br><br>array index: " + i);
  var obj = arr[i];
  for (var key in obj){
    var value = obj[key];
    document.write("<br> - " + key + ": " + value);
  }
}