
function onReady () {
  console.log("Hello PK!");

  var theDate = new Date();
  console.log(theDate);

}

window.onload = onReady;



function displayTime() {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var date = currentTime.getDate();
    var months = currentTime.getMonth();
    var years = currentTime.getFullYear();
    var days = currentTime.getDay();


    var meridiem = "AM"; // this is the default
    if (hours >= 12) {
      meridiem = "PM"
    }

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      // this adds a 0 in front of single digits so 9 shows up as 09
      seconds = "0" + seconds;
    }


    switch (days) {

      case 1:
        days = "Mon";
        break;
      case 2:
        days = "Tue";
        break;
      case 3:
        days = "Wed";
        break;
      case 4:
        days = "Thu";
        break;
      case 5:
        days = "Fri";
        break;
      case 6:
        days = "Sat";
        break;
      default:
        days = "Sun";

    }

    switch (months) {

      case 1:
        months = "FEB";
        break;
      case 2:
        months = "MAR";
        break;
      case 3:
        months = "APR";
        break;
      case 4:
        months = "MAY";
        break;
      case 5:
        months = "JUN";
        break;
      case 6:
        months = "JUL";
        break;
      case 7:
        months = "AUG";
        break;
      case 8:
        months = "SEP";
        break;
      case 9:
        months = "OCT";
        break;
      case 10:
        months = "NOV";
        break;
      case 11:
        months = "DEC";
        break;
      default:
        months = "JAN";

    }


    // this gets the clock running in the html
    document.body.innerHTML = date + " " + months + " " + years + " " + days + " " + hours + ":" + minutes + ":" + seconds + " " + meridiem;


  }




  // this runs the displayTime function coded above and the setInterval makes the clock "tick"
  setInterval(displayTime, 1000);









