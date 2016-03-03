//document.write("hello");



function displayTime() {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

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

    // this gets the clock running in the html
    document.body.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;

  }

  // this runs the displaytime function coded above and the setInterval makes the clock "tick"
  setInterval(displayTime, 1000);


