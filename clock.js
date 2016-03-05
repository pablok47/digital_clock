//document.write("hello");



function displayTime() {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var date = currentTime.getDate();
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
        days = "Monday";
        break;
      case 2:
        days = "Tuesday";
        break;
      case 3:
        days = "Wednesday";
        break;
      case 4:
        days = "Thursday";
        break;
      case 5:
        days = "Friday";
        break;
      case 6:
        days = "Saturday";
        break;
      default:
        days = "Sunday";

    }


    // this gets the clock running in the html
    document.body.innerHTML = date + " " + days + " " + hours + ":" + minutes + ":" + seconds + " " + meridiem;


  }




  // this runs the displayTime function coded above and the setInterval makes the clock "tick"
  setInterval(displayTime, 1000);









