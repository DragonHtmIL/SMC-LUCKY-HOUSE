function openGacha(evt, gachaName) {
  var i, gachacontiner, gachatab;
  gachacontiner = document.getElementsByClassName("gacha-continer");
  for (i = 0; i < gachacontiner.length; i++) {
    gachacontiner[i].style.right = "-100%";
  }
  gachatab = document.getElementsByClassName("gachatab");
  for (i = 0; i < gachatab.length; i++) {
    gachatab[i].className = gachatab[i].className.replace(" active", "");
  }
  document.getElementById(gachaName).style.right = "0%";
  evt.currentTarget.className += " active";
};