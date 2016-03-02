$document.ready(function(){

  function displayTime() {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // this gets a "handle" to the clock div in the html
    var clockDiv = document.getElementById('clock');
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;

  }

  // this runs the displaytime function coded above the first time
  displayTime();


});
