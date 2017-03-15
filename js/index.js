// Displays countdown time parts
function displayParts(countDown) {
  for (var id in countDown)
    document.getElementById(id).innerHTML = countDown[id];
} 

// Current date + 1 day
var countDownTime = new Date().getTime() + 24 * 60 * 60 * 1000;

// Display until date
document.getElementById("till").innerHTML =
  new Date(countDownTime).toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

var tick = setInterval(function() {
  var now = new Date().getTime();
  var timeLeft = countDownTime - now;

  if (timeLeft <= 0) {
    clearInterval(tick);    
    document.getElementById("finished").style.opacity = 1;
  } else
    displayParts({
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours:  Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      sec: Math.floor((timeLeft % (1000 * 60)) / 1000)
    });
  
}, 1000);