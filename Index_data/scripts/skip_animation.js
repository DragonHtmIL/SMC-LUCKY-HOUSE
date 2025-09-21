function skipVidAnim() {
  const vidFrame = document.getElementById("vidFrame");
  const gachaVid = document.getElementById("gachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  gachaVid.removeAttribute("loop");
  gachaVid.pause();
  gachaAud.removeAttribute("loop");
  gachaAud.pause();
  vidFrame.style.display = "none";
  document.getElementById("gachaPrises").style.display = "block";
}