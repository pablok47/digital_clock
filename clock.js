//document.write("hello");



function displayTime() {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // this gets the clock running in the html
    document.body.innerHTML = hours + ":" + minutes + ":" + seconds;

  }

  // this runs the displaytime function coded above the first time
  setInterval(displayTime, 1000);


