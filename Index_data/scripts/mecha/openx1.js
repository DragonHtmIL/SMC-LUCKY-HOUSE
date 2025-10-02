function summonMechaOne() {
  let gold = parseInt(localStorage.getItem("goldStorage")) || 0;
  summonType = "m1";
  if (gold < 160) {
    return;
  }
  gold -= 160;
  localStorage.setItem("goldStorage", gold);
  const vidFrame = document.getElementById("vidFrame");
  const gachaVid = document.getElementById("gachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const videoBlocker = document.getElementById("videoBlocker");
  const randomNumber = Math.random() * mechas.length;
  let mecha;
  // for pressed button
  document.getElementById("oponebtnDefMechaOne").disabled = true;
  document.getElementById("oponebtnDefMechaOne").classList.add("btnclicked");
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
  // Simplified rarity system (adjust probabilities as needed)
  if (randomNumber < 1.00) {
    mecha = mechas.find(c => c.rarity === Math.floor(Math.random() * mechas.length));
  } else {
    mecha = mechas.find(c => c.rarity === Math.floor(Math.random() * mechas.length));
  }
  if (!mecha) {
     // Handle cases where a mecha of a certain rarity is not found.
     const availableCommons = mechas.filter(c => c.rarity === "Default");
     mecha = availableCommons[Math.floor(Math.random() * availableCommons.length)];
     if(!mecha) {
        console.error("No mechas found for summoning!");
        return;
     }
  }
  displaymecha(mecha);
}
function displaymecha(mecha) {
  const displayArea = document.getElementById("prices-display");
  const mechaDiv = document.createElement("div");
  const imgBlocker = document.createElement("div");
  const vidFrame = document.getElementById("vidFrame");
  const gachaVid = document.getElementById("gachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const videoBlocker = document.getElementById("videoBlocker");
  mechaDiv.classList.add("card-continer");
  mechaDiv.classList.add(mecha.rarity);
  mechaDiv.innerHTML = `
    <img src="${mecha.image}" alt="${mecha.name}">
  `;
  imgBlocker.classList.add("img-blocker");
  localStorage.setItem(mecha.name, "geted");
  gachaVid.addEventListener('click', function() {
    if(mechaDiv.classList.contains("Default")) {
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
  displayArea.appendChild(mechaDiv);
  mechaDiv.appendChild(imgBlocker);
}