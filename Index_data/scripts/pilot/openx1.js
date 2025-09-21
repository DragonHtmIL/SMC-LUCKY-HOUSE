const pilots = [
  { name: "Aya", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Aya.png" }, // Replace with actual image paths
  { name: "Belladonna", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Belladonna.png" },
  { name: "Cyrus", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Cyrus.png" },
  { name: "Fran", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Fran.png" },
  { name: "Furanku", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Furanku.png" },
  { name: "Iori", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Iori.png" },
  { name: "Ivan", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Ivan.png" },
  { name: "Jaka", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Jaka.png" },
  { name: "Jiu Chong", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Jiu Chong.png" },
  { name: "Joanna", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Joanna.png" },
  { name: "Kije", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Kije.png" },
  { name: "Kikina", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Kikina.png" },
  { name: "Kizuna Ai", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Kizuna Ai.png" },
  { name: "Lillian", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Lillian.png" },
  { name: "Lysa", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Lysa.png" },
  { name: "Matilda", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Matilda.png" },
  { name: "Mia", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Mia.png" },
  { name: "Mila", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Mila.png" },
  { name: "Mobius", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Mobius.png" },
  { name: "Nighthalk", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Nighthalk.png" },
  { name: "Ning", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Ning.png" },
  { name: "Norma", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Norma.png" },
  { name: "Opal", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Opal.png" },
  { name: "Purity", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Purity.png" },
  { name: "RED", rarity: "Default", image: "Index_data/textures/cards/pilots/default/RED.png" },
  { name: "Riko", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Riko.png" },
  { name: "Rom", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Rom.png" },
  { name: "Serena", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Serena.png" },
  { name: "Shin", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Shin.png" },
  { name: "Silver Deacon", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Silver Deacon.png" },
  { name: "Tarantula", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Tarantula.png" },
  { name: "Vanessa", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Vanessa.png" },
  { name: "Villar", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Villar.png" },
  { name: "Vita", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Vita.png" },
  { name: "Yang", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Yang.png" },
  { name: "Yulia", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Yulia.png" },
  { name: "Yutong", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Yutong.png" },
  { name: "Zoe", rarity: "Default", image: "Index_data/textures/cards/pilots/default/Zoe.png" }
  // ... more pilots
];
function summonPilotOne() {
  const vidFrame = document.getElementById("vidFrame");
  const gachaVid = document.getElementById("gachaAnimation");
  const gachaAud = document.getElementById("gachaAudionation");
  const videoBlocker = document.getElementById("videoBlocker");
  const randomNumber = Math.random() * pilots.length;
  let pilot;
  // for pressed button
  document.getElementById("oponebtnDefPilotOne").disabled = true;
  document.getElementById("oponebtnDefPilotOne").classList.add("btnclicked");
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
    pilot = pilots.find(c => c.rarity === Math.floor(Math.random() * pilots.length));
  } else {
    pilot = pilots.find(c => c.rarity === Math.floor(Math.random() * pilots.length));
  }
  if (!pilot) {
     // Handle cases where a pilot of a certain rarity is not found.
     const availableCommons = pilots.filter(c => c.rarity === "Default");
     pilot = availableCommons[Math.floor(Math.random() * availableCommons.length)];
     if(!pilot) {
        console.error("No pilots found for summoning!");
        return;
     }
  }
  displaypilot(pilot);
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
  })
  document.getElementById("gachaPrises").addEventListener('click', function() {
    displayArea.removeChild(pilotDiv);
    document.getElementById("oponebtnDefPilotOne").classList.remove("btnclicked");
    document.getElementById("oponebtnDefPilotOne").disabled = false;
    document.getElementById("gachaPrises").style.display = "none";
  });
  displayArea.appendChild(pilotDiv);
  pilotDiv.appendChild(imgBlocker);
}