function showPilotAya() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Aya") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Aya";
  itemImage.className = "image-preview aya";
  textInfoBelong.innerHTML = "Mecha: Akashic";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Akashic") === "geted") {
      showMechaAkashic();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Akashic";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotBelladonna() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Belladonna") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Belladonna";
  itemImage.className = "image-preview belladonna";
  textInfoBelong.innerHTML = "Mecha: Death Knell";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Death Knell") === "geted") {
      showMechaDeathKnell();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Death Knell";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotCyrus() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Cyrus") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Cyrus";
  itemImage.className = "image-preview cyrus";
  textInfoBelong.innerHTML = "Mecha: Trio of Enders";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Trio of Enders") === "geted") {
      showMechaTrioofEnders();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Trio of Enders";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotFran() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Fran") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Fran";
  itemImage.className = "image-preview fran";
  textInfoBelong.innerHTML = "Mecha: Twilight";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Twilight") === "geted") {
      showMechaTwilight();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Twilight";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotFuranku() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Furanku") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Furanku";
  itemImage.className = "image-preview furanku";
  textInfoBelong.innerHTML = "Mecha: Tempest";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Tempest") === "geted") {
      showMechaTempest();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Tempest";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotIori() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Iori") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Iori";
  itemImage.className = "image-preview iori";
  textInfoBelong.innerHTML = "Mecha: Skylark";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Skylark") === "geted") {
      showMechaSkylark();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Skylark";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotIvan() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Ivan") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Ivan";
  itemImage.className = "image-preview ivan";
  textInfoBelong.innerHTML = "Mecha: Hotsteel";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Hotsteel") === "geted") {
      showMechaHotsteel();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Hotsteel";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotJaka() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Jaka") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Jaka";
  itemImage.className = "image-preview jaka";
  textInfoBelong.innerHTML = "Mecha: Northern Knight";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Northern Knight") === "geted") {
      showMechaNorthernKnight();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Northern Knight";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotJiuChong() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Jiu Chong") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Jiu Chong";
  itemImage.className = "image-preview jiu-chong";
  textInfoBelong.innerHTML = "Mecha: Ventorus";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Ventorus") === "geted") {
      showMechaVentorus();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Ventorus";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotJoanna() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Joanna") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Joanna";
  itemImage.className = "image-preview joanna";
  textInfoBelong.innerHTML = "Mecha: Andromeda";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Andromeda") === "geted") {
      showMechaAndromeda();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Andromeda";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotKije() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Kije") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Kije";
  itemImage.className = "image-preview kije";
  textInfoBelong.innerHTML = "Mecha: Guerilla Hunter";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Guerilla Hunter") === "geted") {
      showMechaGuerillaHunter();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Guerilla Hunter";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotKikina() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Kikina") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Kikina";
  itemImage.className = "image-preview kikina";
  textInfoBelong.innerHTML = "Mecha: JOJO";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("JOJO") === "geted") {
      showMechaJOJO();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: JOJO";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotKizunaAi() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Kizuna Ai") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Kizuna Ai";
  itemImage.className = "image-preview kizuna-ai";
  textInfoBelong.innerHTML = "Mecha: No mecha for this pilot";
  textInfoBelong.addEventListener('click', function(){
    textInfoBelong.style.color = "red";
    setTimeout(function() {
      textInfoBelong.style.color = "var(--color-on)";
    },3000);
  });
};
function showPilotLillian() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Lillian") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Lillian";
  itemImage.className = "image-preview lillian";
  textInfoBelong.innerHTML = "Mecha: Neutron Star";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Neutron Star") === "geted") {
      showMechaNeutronStar();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Neutron Star";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotLysa() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Lysa") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Lysa";
  itemImage.className = "image-preview lysa";
  textInfoBelong.innerHTML = "Mecha: Gaia";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Gaia") === "geted") {
      showMechaGaia();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Gaia";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotMatilda() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Matilda") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Matilda";
  itemImage.className = "image-preview matilda";
  textInfoBelong.innerHTML = "Mecha: Lancelote";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Lancelote") === "geted") {
      showMechaLancelote();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Lancelote";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotMia() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Mia") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Mia";
  itemImage.className = "image-preview mia";
  textInfoBelong.innerHTML = "Mecha: Nebula";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Nebula") === "geted") {
      showMechaNebula();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Nebula";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotMila() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Mila") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Mila";
  itemImage.className = "image-preview mila";
  textInfoBelong.innerHTML = "Mecha: Caramel";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Caramel") === "geted") {
      showMechaCaramel();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Caramel";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotMobius() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Mobius") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Mobius";
  itemImage.className = "image-preview mobius";
  textInfoBelong.innerHTML = "Mecha: Michael";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Michael") === "geted") {
      showMechaMichael();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Michael";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotNighthalk() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Nighthalk") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Nighthalk";
  itemImage.className = "image-preview nighthalk";
  textInfoBelong.innerHTML = "Mecha: Raven";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Raven") === "geted") {
      showMechaRaven();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Raven";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotNing() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Ning") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Ning";
  itemImage.className = "image-preview ning";
  textInfoBelong.innerHTML = "Mecha: Firefox";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Firefox") === "geted") {
      showMechaFirefox();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Firefox";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotNorma() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Norma") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Norma";
  itemImage.className = "image-preview norma";
  textInfoBelong.innerHTML = "Mecha: Boltus";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Boltus") === "geted") {
      showMechaBoltus();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Boltus";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotOpal() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Opal") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Opal";
  itemImage.className = "image-preview opal";
  textInfoBelong.innerHTML = "Mecha: Akashic";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Akashic") === "geted") {
      showMechaAkashic();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Akashic";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotPurity() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Purity") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Purity";
  itemImage.className = "image-preview purity";
  textInfoBelong.innerHTML = "Mecha: Pulsar";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Pulsar") === "geted") {
      showMechaPulsar();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Pulsar";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotRED() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("RED") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "RED";
  itemImage.className = "image-preview red";
  textInfoBelong.innerHTML = "Mecha: Firestar";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Firestar") === "geted") {
      showMechaFirestar();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Firestar";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotRiko() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Riko") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Riko";
  itemImage.className = "image-preview riko";
  textInfoBelong.innerHTML = "Mecha: No mecha for this pilot";
  textInfoBelong.addEventListener('click', function(){
    textInfoBelong.style.color = "red";
    setTimeout(function() {
      textInfoBelong.style.color = "var(--color-on)";
    },3000);
  });
};
function showPilotRom() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Rom") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Rom";
  itemImage.className = "image-preview rom";
  textInfoBelong.innerHTML = "Mecha: Arthur";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Arthur") === "geted") {
      showMechaArthur();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Arthur";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotSerena() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Serena") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Serena";
  itemImage.className = "image-preview serena";
  textInfoBelong.innerHTML = "Mecha: Alborada";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Alborada") === "geted") {
      showMechaAlborada();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Alborada";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotShin() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Shin") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Shin";
  itemImage.className = "image-preview shin";
  textInfoBelong.innerHTML = "Mecha: Ranger";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Ranger") === "geted") {
      showMechaRanger();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Ranger";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotSilverDeacon() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Silver Deacon") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Silver Deacon";
  itemImage.className = "image-preview silver-deacon";
  textInfoBelong.innerHTML = "Mecha: Gabriel";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Gabriel") === "geted") {
      showMechaGabriel();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Gabriel";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotTarantula() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Tarantula") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Tarantula";
  itemImage.className = "image-preview tarantula";
  textInfoBelong.innerHTML = "Mecha: Doomlight";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Doomlight") === "geted") {
      showMechaDoomlight();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Doomlight";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotVanessa() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Vanessa") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Vanessa";
  itemImage.className = "image-preview vanessa";
  textInfoBelong.innerHTML = "Mecha: Skyfall";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Skyfall") === "geted") {
      showMechaSkyfall();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Skyfall";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotVillar() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Villar") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Villar";
  itemImage.className = "image-preview villar";
  textInfoBelong.innerHTML = "Mecha: Snow Mirage";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Snow Mirage") === "geted") {
      showMechaSnowMirage();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Snow Mirage";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotVita() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Vita") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Vita";
  itemImage.className = "image-preview vita";
  textInfoBelong.innerHTML = "Mecha: Hurricane";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Hurricane") === "geted") {
      showMechaHurricane();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Hurricane";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotYang() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Yang") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Yang";
  itemImage.className = "image-preview yang";
  textInfoBelong.innerHTML = "Mecha: Skyfire";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Skyfire") === "geted") {
      showMechaSkyfire();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Skyfire";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotYulia() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Yulia") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Yulia";
  itemImage.className = "image-preview yulia";
  textInfoBelong.innerHTML = "Mecha: Dreadwolf";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Dreadwolf") === "geted") {
      showMechaDreadwolf();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Dreadwolf";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotYutong() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Yutong") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Yutong";
  itemImage.className = "image-preview yutong";
  textInfoBelong.innerHTML = "Mecha: Aurora";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Aurora") === "geted") {
      showMechaAurora();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Aurora";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};
function showPilotZoe() {
  var itemInfo = document.getElementById("itemInfo");
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(localStorage.getItem("Zoe") === "geted") {
    itemInfo.style.display = "flex";
  }
  itemInfo.className = "item-info def-bg";
  itemName.innerHTML = "Zoe";
  itemImage.className = "image-preview zoe";
  textInfoBelong.innerHTML = "Mecha: Flamenco";
  textInfoBelong.addEventListener('click', function(){
    if(localStorage.getItem("Flamenco") === "geted") {
      showMechaFlamenco();
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Flamenco";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  });
};