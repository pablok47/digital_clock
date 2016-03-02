//document.write("hello");



function displayTime() {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // this gets the clock running in the html
    document.body.innerHTML = hours + ":" + minutes + ":" + seconds;

  }

  // this runs the displaytime function coded above and the setInterval makes the clock "tick"
  setInterval(displayTime, 1000);


