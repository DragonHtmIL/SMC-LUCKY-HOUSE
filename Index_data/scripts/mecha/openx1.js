const mechas = [
  { name: "Akashic", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Akashic.png" }, // Replace with actual image paths
  { name: "Alborada", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Alborada.png" },
  { name: "Andromeda", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Andromeda.png" },
  { name: "Arthur", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Arthur.png" },
  { name: "Aurora", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Aurora.png" },
  { name: "Boltus", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Boltus.png" },
  { name: "Caramel", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Caramel.png" },
  { name: "Death Knel", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Death Knel.png" },
  { name: "Doomlight", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Doomlight.png" },
  { name: "Dreadwolf", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Dreadwolf.png" },
  { name: "Firefox", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Firefox.png" },
  { name: "Firestar", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Firestar.png" },
  { name: "Flamenco", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Flamenco.png" },
  { name: "Gabriel", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Gabriel.png" },
  { name: "Gaia", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Gaia.png" },
  { name: "Guerilla Hunter", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Guerilla Hunter.png" },
  { name: "Hotsteel", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Hotsteel.png" },
  { name: "Hurricane", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Hurricane.png" },
  { name: "JOJO", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Jojo.png" },
  { name: "Lancelot", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Lancelot.png" },
  { name: "Michael", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Michael.png" },
  { name: "Moon Rabbit", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Moon Rabbit.png" },
  { name: "Nebula", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Nebula.png" },
  { name: "Neutron Star", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Neutron Star.png" },
  { name: "Northern Knight", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Northern Knight.png" },
  { name: "Pulsar", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Pulsar.png" },
  { name: "Ranger", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Ranger.png" },
  { name: "Raven", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Raven.png" },
  { name: "Shiranui", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Shiranui.png" },
  { name: "Skyfall", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Skyfall.png" },
  { name: "Skyfire", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Skyfire.png" },
  { name: "Skylark", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Skylark.png" },
  { name: "Snow Mirage", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Snow Mirage.png" },
  { name: "Tempest", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Tempest.png" },
  { name: "Trio of Enders", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Trio of Enders.png" },
  { name: "Twilight", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Twilight.png" },
  { name: "Ventorus", rarity: "Default", image: "Index_data/textures/cards/mechas/default/Ventorus.png" }
  // ... more mechas
];
function summonMechaOne() {
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
  })
  document.getElementById("gachaPrises").addEventListener('click', function() {
    displayArea.removeChild(mechaDiv);
    document.getElementById("oponebtnDefMechaOne").classList.remove("btnclicked");
    document.getElementById("oponebtnDefMechaOne").disabled = false;
    document.getElementById("gachaPrises").style.display = "none";
  });
  displayArea.appendChild(mechaDiv);
  mechaDiv.appendChild(imgBlocker);
}