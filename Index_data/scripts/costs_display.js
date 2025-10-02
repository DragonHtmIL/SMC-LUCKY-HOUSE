function costGoldShows() {
  const goldsLabels = document.querySelectorAll(".cost-have-gold");
  for(var i = 0; i < goldsLabels.length; i++) {
    goldsLabels[i].innerHTML = localStorage.getItem("goldStorage");
  }
}