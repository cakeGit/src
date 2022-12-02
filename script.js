
examDate = new Date(new Date().getFullYear(), 11, 5);

function updateTime() {
  today = new Date();
  seconds = Math.floor((examDate.getTime()-today.getTime())/1000);

  minutes = Math.floor(seconds/60);
  seconds = seconds%60;

  hours = Math.floor(minutes/60);
  minutes = minutes%60;

  days = Math.floor(hours/24);
  hours = hours%24;

  document.getElementById("days").innerText=minutes;
  document.getElementById("hours").innerText=hours;
  document.getElementById("seconds").innerText=seconds;
  document.getElementById("minutes").innerText=minutes;
}

updateTime();

setInterval(updateTime, 1000);
