function showMechaAkashic() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Akashic") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Akashic";
  itemImage.className = "image-preview akashic";
  textInfoBelong.innerHTML = "Pilot: Opal";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Opal") === "geted") {
      showPilotOpal();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Opal";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaAlborada() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Alborada") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Alborada";
  itemImage.className = "image-preview alborada";
  textInfoBelong.innerHTML = "Pilot: Serena";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Serena") === "geted") {
      showPilotSerena();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Serena";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaAndromeda() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Andromeda") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Andromeda";
  itemImage.className = "image-preview andromeda";
  textInfoBelong.innerHTML = "Pilot: Joanna";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Joanna") === "geted") {
      showPilotJoanna();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Joanna";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaArthur() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Arthur") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Arthur";
  itemImage.className = "image-preview arthur";
  textInfoBelong.innerHTML = "Pilot: Rom";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Rom") === "geted") {
      showPilotRom();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Rom";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaAurora() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Aurora") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Aurora";
  itemImage.className = "image-preview aurora";
  textInfoBelong.innerHTML = "Pilot: Yutong";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Yutong") === "geted") {
      showPilotYutong();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Yutong";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaBoltus() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Boltus") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Boltus";
  itemImage.className = "image-preview boltus";
  textInfoBelong.innerHTML = "Pilot: Norma";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Norma") === "geted") {
      showPilotNorma();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Norma";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaCaramel() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Caramel") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Caramel";
  itemImage.className = "image-preview caramel";
  textInfoBelong.innerHTML = "Pilot: Mila";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Mila") === "geted") {
      showPilotMila();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Mila";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaDeathKnell() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Death Knell") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Death Knell";
  itemImage.className = "image-preview death-knell";
  textInfoBelong.innerHTML = "Pilot: Belladonna";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Belladonna") === "geted") {
      showPilotBelladonna();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Belladonna";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaDoomlight() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Doomlight") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Doomlight";
  itemImage.className = "image-preview doomlight";
  textInfoBelong.innerHTML = "Pilot: Tarantula";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Tarantula") === "geted") {
      showPilotTarantula();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Tarantula";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaDreadwolf() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Dreadwolf") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Dreadwolf";
  itemImage.className = "image-preview dreadwolf";
  textInfoBelong.innerHTML = "Pilot: Yulia";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Yulia") === "geted") {
      showPilotYulia();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Yulia";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaFirefox() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Firefox") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Firefox";
  itemImage.className = "image-preview firefox";
  textInfoBelong.innerHTML = "Pilot: Ning";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Ning") === "geted") {
      showPilotNing();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Ning";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaFirestar() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Firestar") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Firestar";
  itemImage.className = "image-preview firestar";
  textInfoBelong.innerHTML = "Pilot: R.E.D";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("RED") === "geted") {
      showPilotRED();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: R.E.D";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaFlamenco() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Flamenco") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Flamenco";
  itemImage.className = "image-preview flamenco";
  textInfoBelong.innerHTML = "Pilot: Zoe";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Zoe") === "geted") {
      showPilotZoe();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Zoe";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaGabriel() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Gabriel") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Gabriel";
  itemImage.className = "image-preview gabriel";
  textInfoBelong.innerHTML = "Pilot: Silver Deacon";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Silver Deacon") === "geted") {
      showPilotSilverDeacon();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Silver Deacon";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaGaia() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Gaia") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Gaia";
  itemImage.className = "image-preview gaia";
  textInfoBelong.innerHTML = "Pilot: Lysa";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Lysa") === "geted") {
      showPilotLysa();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Lysa";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaGuerillaHunter() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Guerilla Hunter") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Guerilla Hunter";
  itemImage.className = "image-preview guerilla-hunter";
  textInfoBelong.innerHTML = "Pilot: Kije";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Kije") === "geted") {
      showPilotKije();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Kije";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaHotsteel() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Hotsteel") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Hotsteel";
  itemImage.className = "image-preview hotsteel";
  textInfoBelong.innerHTML = "Pilot: Ivan";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Ivan") === "geted") {
      showPilotIvan();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Ivan";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaHurricane() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Hurricane") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Hurricane";
  itemImage.className = "image-preview hurricane";
  textInfoBelong.innerHTML = "Pilot: Vita";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Vita") === "geted") {
      showPilotVita();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Vita";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaJojo() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Jojo") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Jojo";
  itemImage.className = "image-preview jojo";
  textInfoBelong.innerHTML = "Pilot: Kikina";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Kikina") === "geted") {
      showPilotKikina();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Kikina";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaLancelot() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Lancelot") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Lancelot";
  itemImage.className = "image-preview lancelot";
  textInfoBelong.innerHTML = "Pilot: Matilda";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Matilda") === "geted") {
      showPilotMatilda();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Matilda";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaMichael() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Michael") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Michael";
  itemImage.className = "image-preview michael";
  textInfoBelong.innerHTML = "Pilot: Mobius";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Mobius") === "geted") {
      showPilotMobius();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Mobius";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaMoonRabbit() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Moon Rabbit") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Moon Rabbit";
  itemImage.className = "image-preview moon-rabbit";
  textInfoBelong.innerHTML = "Pilot: No pilot for this mecha";
  textInfoBelong.addEventListener('click', function(){
    textInfoBelong.style.color = "red";
    setTimeout(function() {
      textInfoBelong.style.color = "var(--color-on)";
    },3000);
  });
};
function showMechaNebula() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Nebula") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Nebula";
  itemImage.className = "image-preview nebula";
  textInfoBelong.innerHTML = "Pilot: Mia";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Mia") === "geted") {
      showPilotMia();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Mia";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaNeutronStar() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Neutron Star") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Neutron Star";
  itemImage.className = "image-preview neutron-star";
  textInfoBelong.innerHTML = "Pilot: Lillian";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Lillian") === "geted") {
      showPilotLillian();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Lillian";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaNorthernKnight() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Northern Knight") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Northern Knight";
  itemImage.className = "image-preview northern-knight";
  textInfoBelong.innerHTML = "Pilot: Jaka";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Jaka") === "geted") {
      showPilotJaka();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Jaka";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaPulsar() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Pulsar") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Pulsar";
  itemImage.className = "image-preview pulsar";
  textInfoBelong.innerHTML = "Pilot: Purity";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Purity") === "geted") {
      showPilotPurity();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Purity";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaRanger() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Ranger") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Ranger";
  itemImage.className = "image-preview ranger";
  textInfoBelong.innerHTML = "Pilot: Shin";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Shin") === "geted") {
      showPilotShin();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Shin";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaRaven() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Raven") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Raven";
  itemImage.className = "image-preview raven";
  textInfoBelong.innerHTML = "Pilot: Nighthalk";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Nighthalk") === "geted") {
      showPilotNighthalk();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Nighthalk";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaShiranui() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Shiranui") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Shiranui";
  itemImage.className = "image-preview shiranui";
  textInfoBelong.innerHTML = "Pilot: Aya";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Aya") === "geted") {
      showPilotAya();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Aya";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaSkyfall() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Skyfall") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Skyfall";
  itemImage.className = "image-preview skyfall";
  textInfoBelong.innerHTML = "Pilot: Vanessa";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Vanessa") === "geted") {
      showPilotVanessa();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Vanessa";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaSkyfire() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Skyfire") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Skyfire";
  itemImage.className = "image-preview skyfire";
  textInfoBelong.innerHTML = "Pilot: Yang";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Yang") === "geted") {
      showPilotYang();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Yang";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaSkylark() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Skylark") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Skylark";
  itemImage.className = "image-preview skylark";
  textInfoBelong.innerHTML = "Pilot: Iori";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Iori") === "geted") {
      showPilotIori();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Iori";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaSnowMirage() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Snow Mirage") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Snow Mirage";
  itemImage.className = "image-preview snow-mirage";
  textInfoBelong.innerHTML = "Pilot: Villar";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Villar") === "geted") {
      showPilotVillar();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Villar";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaTempest() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Tempest") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Tempest";
  itemImage.className = "image-preview tempest";
  textInfoBelong.innerHTML = "Pilot: Furanku";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Furanku") === "geted") {
      showPilotFuranku();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Furanku";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaTrioofEnders() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Trio of Enders") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Trio of Enders";
  itemImage.className = "image-preview trio-of-enders";
  textInfoBelong.innerHTML = "Pilot: Cyrus";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Cyrus") === "geted") {
      showPilotCyrus();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Cyrus";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaTwilight() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Twilight") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Twilight";
  itemImage.className = "image-preview twilight";
  textInfoBelong.innerHTML = "Pilot: Fran";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Fran") === "geted") {
      showPilotFran();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Fran";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showMechaVentorus() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Ventorus") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Ventorus";
  itemImage.className = "image-preview ventorus";
  textInfoBelong.innerHTML = "Pilot: Jiu Chong";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Jiu Chong") === "geted") {
      showPilotJiuChong();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Jiu Chong";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};