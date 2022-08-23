function showDate(){
    var currentDate = new Date()
    var months = [ "January", "Feburary", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];

    var month = months[currentDate.getMonth()]
    var day = days[currentDate.getDay()-1]
    var date = currentDate.getDate()
    var dateContainer = document.getElementById("date")
    dateContainer.innerText = month + "," + day + " " + date 
}

var refreshInterval;
var hourContainer;
var minuteContainer;
var secondContainer;
var ampm;
function showTime(){

    refreshInterval = setInterval( function() {
        var currentTime = new Date()
        var hours = 13
        var minutes = currentTime.getMinutes()
        var seconds = currentTime.getSeconds()
        var session = '';
        
        if(hours > 12 ){
            hours = (hours - 12)
            session = 'PM'
        }
        else if(hours == 12){
            hours = hours
            session="PM"
        }
        else if(hours < 12){
            session = 'AM'
        }
        if (hours <10){
            hours = "0"+hours
        }
        if(minutes < 10){
            minutes = "0"+minutes
        }
        if(seconds < 10){
            seconds = "0"+seconds
        }
            ampm = document.getElementById("ampm")
            ampm.innerText = session;
            hourContainer = document.getElementById("hour")
            hourContainer.innerText = hours;
            minuteContainer = document.getElementById("minutes")
            minuteContainer.innerText = minutes;
            secondContainer = document.getElementById("seconds")
            secondContainer.innerText = seconds;
    }, 1000)

}

showDate()

function stopTime(){
    clearInterval(refreshInterval)
    hourContainer.textContent = "00";
    minuteContainer.textContent = "00";
    secondContainer.textContent = "";
    ampm.textContent = "";
}