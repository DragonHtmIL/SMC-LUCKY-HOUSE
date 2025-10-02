window.addEventListener('load', function() {
  checkObtineds();
  document.getElementById("mechaDefaultEvent").click();
  costGoldShows();
  setInterval(changeBackgroundMecha, 5000);
  setInterval(changeBackgroundPilot, 5000);
});