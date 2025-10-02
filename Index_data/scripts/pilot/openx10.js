function summonPilotTen() {
  let gold = parseInt(localStorage.getItem("goldStorage")) || 0;
  summonType = "p10";
  if (gold < 100) {
    return;
  }
  gold -= 100;
  costGoldShows();
  localStorage.setItem("goldStorage", gold);
  const vidFrame = document.getElementById("vidFrame");
  const gachaVid = document.getElementById("gachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const videoBlocker = document.getElementById("videoBlocker");
  // for pressed button
  document.getElementById("oponebtnDefPilotTen").disabled = true;
  document.getElementById("oponebtnDefPilotTen").classList.add("btnclicked");
  document.getElementById("btnPress").play();
  document.getElementById("btnPress").removeAttribute("loop");
  // start gacha animation
  setTimeout( function() {
    gachaVid.src = "Index_data/videos/Gacha vid start.mp4";
    gachaAud.src = "Index_data/audio/Gacha aud start.mp3";
    vidFrame.style.display = "block";
    videoBlocker.style.display = "block";
    gachaVid.onloadeddata = () => {
      gachaVid.play();
    };
    gachaAud.onloadeddata = () => {
      gachaAud.play();
    };
  },700);
  // video phaza for pressing
  setTimeout( function() {
    videoBlocker.style.display = "none";
    gachaVid.src = "Index_data/videos/Gacha vid press.mp4";
    gachaVid.setAttribute("loop","loop");
    gachaAud.src = "Index_data/audio/Gacha aud press.mp3";
    gachaAud.setAttribute("loop","loop");
    gachaVid.onloadeddata = () => {
      gachaVid.play();
    };
    gachaAud.onloadeddata = () => {
      gachaAud.play();
    };
  },7000);
  // generate 10 pilots
  const results = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.random() * pilots.length;
    let pilot;
    if (randomNumber < 1.0) {
      pilot = pilots[Math.floor(Math.random() * pilots.length)];
    } else {
      pilot = pilots[Math.floor(Math.random() * pilots.length)];
    }
    if (!pilot) {
      const availableCommons = pilots.filter(c => c.rarity === "Default");
      pilot = availableCommons[Math.floor(Math.random() * availableCommons.length)];
    }
    results.push(pilot);
  }
  results.forEach(pilot => displaypilot(pilot));
}
function displaypilot(pilot) {
  const displayArea = document.getElementById("prices-display");
  const pilotDiv = document.createElement("div");
  const imgBlocker = document.createElement("div");
  const vidFrame = document.getElementById("vidFrame");
  const gachaVid = document.getElementById("gachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const videoBlocker = document.getElementById("videoBlocker");
  pilotDiv.classList.add("card-continer");
  pilotDiv.classList.add(pilot.rarity);
  pilotDiv.innerHTML = `
    <img src="${pilot.image}" alt="${pilot.name}">
  `;
  imgBlocker.classList.add("img-blocker");
  localStorage.setItem(pilot.name, "geted");
  gachaVid.addEventListener('click', function() {
    if(pilotDiv.classList.contains("Default")) {
      gachaVid.src = "Index_data/videos/Gacha vid pressed.mp4";
      gachaAud.src = "Index_data/audio/Gacha aud pressed.mp3";
    }else{
      console.log("class is not defined for video src display");
    }
    gachaVid.onloadeddata = () => {
      gachaVid.play();
    };
    gachaAud.onloadeddata = () => {
      gachaAud.play();
    };
    videoBlocker.style.display = "block";
    setTimeout( function() {
      gachaVid.removeAttribute("loop");
      gachaVid.pause();
      gachaAud.removeAttribute("loop");
      gachaAud.pause();
      vidFrame.style.display = "none";
      document.getElementById("gachaPrises").style.display = "block";
    },1650);
  });
  document.getElementById("gachaPrises").addEventListener('click', function() {
    if(summonType === "m1") {
      displayArea.removeChild(mechaDiv);
      document.getElementById("oponebtnDefMechaOne").classList.remove("btnclicked");
      document.getElementById("oponebtnDefMechaOne").disabled = false;
      document.getElementById("gachaPrises").style.display = "none";
    }else
    if(summonType === "p1") {
      displayArea.removeChild(pilotDiv);
      document.getElementById("oponebtnDefPilotOne").classList.remove("btnclicked");
      document.getElementById("oponebtnDefPilotOne").disabled = false;
      document.getElementById("gachaPrises").style.display = "none";
    }else
    if(summonType === "m10") {
      const cards = displayArea.querySelectorAll(".card-continer");
      cards.forEach(card => card.remove());
      document.getElementById("oponebtnDefMechaTen").classList.remove("btnclicked");
      document.getElementById("oponebtnDefMechaTen").disabled = false;
      document.getElementById("gachaPrises").style.display = "none";
    }else
    if(summonType === "p10") {
      const cards = displayArea.querySelectorAll(".card-continer");
      cards.forEach(card => card.remove());
      document.getElementById("oponebtnDefPilotTen").classList.remove("btnclicked");
      document.getElementById("oponebtnDefPilotTen").disabled = false;
      document.getElementById("gachaPrises").style.display = "none";
    }
    summonType = "none";
  });
  displayArea.appendChild(pilotDiv);
  pilotDiv.appendChild(imgBlocker);
}