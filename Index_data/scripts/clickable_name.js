function showBlongs() {
  var itemImage = document.getElementById("itemImage");
  var itemName = document.getElementById("itemName");
  var textInfoBelong = document.getElementById("textInfoBelong");
  if(itemImage.className === "image-preview akashic") {
    if(localStorage.getItem("Opal") === "geted") {
      itemImage.className = "image-preview opal";
      itemName.innerHTML = "Opal";
      textInfoBelong.innerHTML = "Mecha: Akashic";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Opal";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview opal") {
    if(localStorage.getItem("Akashic") === "geted") {
      itemImage.className = "image-preview akashic";
      itemName.innerHTML = "Akashic";
      textInfoBelong.innerHTML = "Pilot: Opal";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Akashic";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview alborada") {
    if(localStorage.getItem("Serena") === "geted") {
      itemImage.className = "image-preview serena";
      itemName.innerHTML = "Serena";
      textInfoBelong.innerHTML = "Mecha: Alborada";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Serena";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview serena") {
    if(localStorage.getItem("Alborada") === "geted") {
      itemImage.className = "image-preview alborada";
      itemName.innerHTML = "Alborada";
      textInfoBelong.innerHTML = "Pilot: Serena";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Alborada";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview andromeda") {
    if(localStorage.getItem("Joanna") === "geted") {
      itemImage.className = "image-preview joanna";
      itemName.innerHTML = "Joanna";
      textInfoBelong.innerHTML = "Mecha: Andromeda";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Joanna";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview joanna") {
    if(localStorage.getItem("Andromeda") === "geted") {
      itemImage.className = "image-preview andromeda";
      itemName.innerHTML = "Andromeda";
      textInfoBelong.innerHTML = "Pilot: Joanna";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Andromeda";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview arthur") {
    if(localStorage.getItem("Rom") === "geted") {
      itemImage.className = "image-preview rom";
      itemName.innerHTML = "Rom";
      textInfoBelong.innerHTML = "Mecha: Arthur";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Rom";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview rom") {
    if(localStorage.getItem("Arthur") === "geted") {
      itemImage.className = "image-preview arthur";
      itemName.innerHTML = "Arthur";
      textInfoBelong.innerHTML = "Pilot: Rom";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Arthur";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview aurora") {
    if(localStorage.getItem("Yutong") === "geted") {
      itemImage.className = "image-preview yutong";
      itemName.innerHTML = "Yutong";
      textInfoBelong.innerHTML = "Mecha: Aurora";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Yutong";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview yutong") {
    if(localStorage.getItem("Aurora") === "geted") {
      itemImage.className = "image-preview aurora";
      itemName.innerHTML = "Aurora";
      textInfoBelong.innerHTML = "Pilot: Yutong";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Aurora";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview boltus") {
    if(localStorage.getItem("Norma") === "geted") {
      itemImage.className = "image-preview norma";
      itemName.innerHTML = "Norma";
      textInfoBelong.innerHTML = "Mecha: Boltus";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Norma";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview norma") {
    if(localStorage.getItem("Boltus") === "geted") {
      itemImage.className = "image-preview boltus";
      itemName.innerHTML = "Boltus";
      textInfoBelong.innerHTML = "Pilot: Norma";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Boltus";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview caramel") {
    if(localStorage.getItem("Mila") === "geted") {
      itemImage.className = "image-preview mila";
      itemName.innerHTML = "Mila";
      textInfoBelong.innerHTML = "Mecha: Caramel";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Mila";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview mila") {
    if(localStorage.getItem("Caramel") === "geted") {
      itemImage.className = "image-preview caramel";
      itemName.innerHTML = "Caramel";
      textInfoBelong.innerHTML = "Pilot: Mila";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Caramel";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview death-knell") {
    if(localStorage.getItem("Belladonna") === "geted") {
      itemImage.className = "image-preview belladonna";
      itemName.innerHTML = "Belladonna";
      textInfoBelong.innerHTML = "Mecha: Death Knell";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Belladonna";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview belladonna") {
    if(localStorage.getItem("Death Knell") === "geted") {
      itemImage.className = "image-preview death-knell";
      itemName.innerHTML = "Death Knell";
      textInfoBelong.innerHTML = "Pilot: Belladonna";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Death Knell";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview doomlight") {
    if(localStorage.getItem("Tarantula") === "geted") {
      itemImage.className = "image-preview tarantula";
      itemName.innerHTML = "Tarantula";
      textInfoBelong.innerHTML = "Mecha: Doomlight";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Tarantula";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview tarantula") {
    if(localStorage.getItem("Doomlight") === "geted") {
      itemImage.className = "image-preview doomlight";
      itemName.innerHTML = "Doomlight";
      textInfoBelong.innerHTML = "Pilot: Tarantula";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Doomlight";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview dreadwolf") {
    if(localStorage.getItem("Yulia") === "geted") {
      itemImage.className = "image-preview yulia";
      itemName.innerHTML = "Yulia";
      textInfoBelong.innerHTML = "Mecha: Dreadwolf";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Yulia";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview yulia") {
    if(localStorage.getItem("Dreadwolf") === "geted") {
      itemImage.className = "image-preview dreadwolf";
      itemName.innerHTML = "Dreadwolf";
      textInfoBelong.innerHTML = "Pilot: Yulia";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Dreadwolf";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview firefox") {
    if(localStorage.getItem("Ning") === "geted") {
      itemImage.className = "image-preview ning";
      itemName.innerHTML = "Ning";
      textInfoBelong.innerHTML = "Mecha: Firefox";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Ning";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview ning") {
    if(localStorage.getItem("Firefox") === "geted") {
      itemImage.className = "image-preview firefox";
      itemName.innerHTML = "Firefox";
      textInfoBelong.innerHTML = "Pilot: Ning";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Firefox";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview firestar") {
    if(localStorage.getItem("RED") === "geted") {
      itemImage.className = "image-preview red";
      itemName.innerHTML = "R.E.D";
      textInfoBelong.innerHTML = "Mecha: Firestar";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: R.E.D";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview red") {
    if(localStorage.getItem("Firestar") === "geted") {
      itemImage.className = "image-preview firestar";
      itemName.innerHTML = "Firestar";
      textInfoBelong.innerHTML = "Pilot: R.E.D";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Firestar";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview flamenco") {
    if(localStorage.getItem("Flamenco") === "geted") {
      itemImage.className = "image-preview zoe";
      itemName.innerHTML = "Flamenco";
      textInfoBelong.innerHTML = "Mecha: Flamenco";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Zor";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview zoe") {
    if(localStorage.getItem("Flamenco") === "geted") {
      itemImage.className = "image-preview flamenco";
      itemName.innerHTML = "Flamenco";
      textInfoBelong.innerHTML = "Pilot: Zoe";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Flamenco";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview gabriel") {
    if(localStorage.getItem("Silver Deacon") === "geted") {
      itemImage.className = "image-preview silver-deacon";
      itemName.innerHTML = "Silver Deacon";
      textInfoBelong.innerHTML = "Mecha: Gabriel";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Silver Deacon";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview silver-deacon") {
    if(localStorage.getItem("Gabriel") === "geted") {
      itemImage.className = "image-preview gabriel";
      itemName.innerHTML = "Gabriel";
      textInfoBelong.innerHTML = "Pilot: Silver Deacon";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Gabriel";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview gaia") {
    if(localStorage.getItem("Lysa") === "geted") {
      itemImage.className = "image-preview lysa";
      itemName.innerHTML = "Lysa";
      textInfoBelong.innerHTML = "Mecha: Gaia";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Lysa";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview lysa") {
    if(localStorage.getItem("Gaia") === "geted") {
      itemImage.className = "image-preview gaia";
      itemName.innerHTML = "Gaia";
      textInfoBelong.innerHTML = "Pilot: Lysa";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Gaia";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview guerilla-hunter") {
    if(localStorage.getItem("Kije") === "geted") {
      itemImage.className = "image-preview kije";
      itemName.innerHTML = "Kije";
      textInfoBelong.innerHTML = "Mecha: Guerilla Hunter";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Kije";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview kije") {
    if(localStorage.getItem("Guerilla Hunter") === "geted") {
      itemImage.className = "image-preview guerilla-hunter";
      itemName.innerHTML = "Guerilla Hunter";
      textInfoBelong.innerHTML = "Pilot: Kije";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Guerilla Hunter";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview hotsteel") {
    if(localStorage.getItem("Ivan") === "geted") {
      itemImage.className = "image-preview ivan";
      itemName.innerHTML = "Ivan";
      textInfoBelong.innerHTML = "Mecha: Hotsteel";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Ivan";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview ivan") {
    if(localStorage.getItem("Hotsteel") === "geted") {
      itemImage.className = "image-preview hotsteel";
      itemName.innerHTML = "Hotsteel";
      textInfoBelong.innerHTML = "Pilot: Ivan";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Hotsteel";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview hurricane") {
    if(localStorage.getItem("Vita") === "geted") {
      itemImage.className = "image-preview vita";
      itemName.innerHTML = "Vita";
      textInfoBelong.innerHTML = "Mecha: Hurricane";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Vita";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview vita") {
    if(localStorage.getItem("Hurricane") === "geted") {
      itemImage.className = "image-preview hurricane";
      itemName.innerHTML = "Hurricane";
      textInfoBelong.innerHTML = "Pilot: Vita";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Hurricane";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview jojo") {
    if(localStorage.getItem("Kikina") === "geted") {
      itemImage.className = "image-preview kikina";
      itemName.innerHTML = "Kikina";
      textInfoBelong.innerHTML = "Mecha: JOJO";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Kikina";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview kikina") {
    if(localStorage.getItem("JOJO") === "geted") {
      itemImage.className = "image-preview jojo";
      itemName.innerHTML = "JOJO";
      textInfoBelong.innerHTML = "Pilot: Kikina";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: JOJO";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview lancelot") {
    if(localStorage.getItem("Matilda") === "geted") {
      itemImage.className = "image-preview matilda";
      itemName.innerHTML = "Matilda";
      textInfoBelong.innerHTML = "Mecha: Lancelot";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Matilda";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview matilda") {
    if(localStorage.getItem("Lancelot") === "geted") {
      itemImage.className = "image-preview lancelot";
      itemName.innerHTML = "Lancelot";
      textInfoBelong.innerHTML = "Pilot: Matilda";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Lancelot";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview michael") {
    if(localStorage.getItem("Mobius") === "geted") {
      itemImage.className = "image-preview mobius";
      itemName.innerHTML = "Mobius";
      textInfoBelong.innerHTML = "Mecha: Michael";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Mobius";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview mobius") {
    if(localStorage.getItem("Michael") === "geted") {
      itemImage.className = "image-preview michael";
      itemName.innerHTML = "Michael";
      textInfoBelong.innerHTML = "Pilot: Mobius";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Michael";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview moon-rabbit") {
    textInfoBelong.innerHTML = "Pilot: No pilot for this mecha";
      textInfoBelong.style.color = "red";
    setTimeout(function() {
      textInfoBelong.style.color = "var(--color-on)";
    },400);
    setTimeout(function() {
      textInfoBelong.style.color = "red";
    },800);
    setTimeout(function() {
      textInfoBelong.style.color = "var(--color-on)";
    },1200);
  }else
  if(itemImage.className === "image-preview nebula") {
    if(localStorage.getItem("Mia") === "geted") {
      itemImage.className = "image-preview mia";
      itemName.innerHTML = "Mia";
      textInfoBelong.innerHTML = "Mecha: Nebula";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Mia";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview mia") {
    if(localStorage.getItem("Nebula") === "geted") {
      itemImage.className = "image-preview nebula";
      itemName.innerHTML = "Nebula";
      textInfoBelong.innerHTML = "Pilot: Mia";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Nebula";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview neutron-star") {
    if(localStorage.getItem("Lillian") === "geted") {
      itemImage.className = "image-preview lillian";
      itemName.innerHTML = "Lillian";
      textInfoBelong.innerHTML = "Mecha: Neutron Star";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Lillian";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview lillian") {
    if(localStorage.getItem("Neutron Star") === "geted") {
      itemImage.className = "image-preview neutron-star";
      itemName.innerHTML = "Neutron Star";
      textInfoBelong.innerHTML = "Pilot: Lillian";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Neutron Star";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview northern-knight") {
    if(localStorage.getItem("Jaka") === "geted") {
      itemImage.className = "image-preview jaka";
      itemName.innerHTML = "Jaka";
      textInfoBelong.innerHTML = "Mecha: Northern Knight";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Jaka";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview jaka") {
    if(localStorage.getItem("Northern Knight") === "geted") {
      itemImage.className = "image-preview northern-knight";
      itemName.innerHTML = "Northern Knight";
      textInfoBelong.innerHTML = "Pilot: Jaka";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Northern Knight";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview pulsar") {
    if(localStorage.getItem("Purity") === "geted") {
      itemImage.className = "image-preview purity";
      itemName.innerHTML = "Purity";
      textInfoBelong.innerHTML = "Mecha: Pulsar";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Purity";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview purity") {
    if(localStorage.getItem("Pulsar") === "geted") {
      itemImage.className = "image-preview pulsar";
      itemName.innerHTML = "Pulsar";
      textInfoBelong.innerHTML = "Pilot: Purity";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Pulsar";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview ranger") {
    if(localStorage.getItem("Shin") === "geted") {
      itemImage.className = "image-preview shin";
      itemName.innerHTML = "Shin";
      textInfoBelong.innerHTML = "Mecha: Ranger";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Shin";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview shin") {
    if(localStorage.getItem("Ranger") === "geted") {
      itemImage.className = "image-preview ranger";
      itemName.innerHTML = "Ranger";
      textInfoBelong.innerHTML = "Pilot: Shin";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Ranger";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview raven") {
    if(localStorage.getItem("Nighthalk") === "geted") {
      itemImage.className = "image-preview nighthalk";
      itemName.innerHTML = "Nighthalk";
      textInfoBelong.innerHTML = "Mecha: Raven";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Nighthalk";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview nighthalk") {
    if(localStorage.getItem("Raven") === "geted") {
      itemImage.className = "image-preview raven";
      itemName.innerHTML = "Raven";
      textInfoBelong.innerHTML = "Pilot: Nighthalk";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Raven";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview shiranui") {
    if(localStorage.getItem("Aya") === "geted") {
      itemImage.className = "image-preview aya";
      itemName.innerHTML = "Aya";
      textInfoBelong.innerHTML = "Mecha: Shiranui";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Aya";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview aya") {
    if(localStorage.getItem("Shiranui") === "geted") {
      itemImage.className = "image-preview shiranui";
      itemName.innerHTML = "Shiranui";
      textInfoBelong.innerHTML = "Pilot: Aya";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Shiranui";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview skyfall") {
    if(localStorage.getItem("Vanessa") === "geted") {
      itemImage.className = "image-preview vanessa";
      itemName.innerHTML = "Vanessa";
      textInfoBelong.innerHTML = "Mecha: Skyfall";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Vanessa";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview vanessa") {
    if(localStorage.getItem("Skyfall") === "geted") {
      itemImage.className = "image-preview skyfall";
      itemName.innerHTML = "Skyfall";
      textInfoBelong.innerHTML = "Pilot: Vanessa";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Skyfall";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview skyfire") {
    if(localStorage.getItem("Yang") === "geted") {
      itemImage.className = "image-preview yang";
      itemName.innerHTML = "Yang";
      textInfoBelong.innerHTML = "Mecha: Skyfire";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Yang";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview yang") {
    if(localStorage.getItem("Skyfire") === "geted") {
      itemImage.className = "image-preview skyfire";
      itemName.innerHTML = "Skyfire";
      textInfoBelong.innerHTML = "Pilot: Yang";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Skyfire";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview skylark") {
    if(localStorage.getItem("Iori") === "geted") {
      itemImage.className = "image-preview iori";
      itemName.innerHTML = "Iori";
      textInfoBelong.innerHTML = "Mecha: Skylark";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Iori";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview iori") {
    if(localStorage.getItem("Skylark") === "geted") {
      itemImage.className = "image-preview skylark";
      itemName.innerHTML = "Skylark";
      textInfoBelong.innerHTML = "Pilot: Iori";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Skylark";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview snow-mirage") {
    if(localStorage.getItem("Villar") === "geted") {
      itemImage.className = "image-preview villar";
      itemName.innerHTML = "Villar";
      textInfoBelong.innerHTML = "Mecha: Snow Mirage";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Villar";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview villar") {
    if(localStorage.getItem("Snow Mirage") === "geted") {
      itemImage.className = "image-preview snow-mirage";
      itemName.innerHTML = "Snow Mirage";
      textInfoBelong.innerHTML = "Pilot: Villar";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Snow Mirage";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview tempest") {
    if(localStorage.getItem("Furanku") === "geted") {
      itemImage.className = "image-preview furanku";
      itemName.innerHTML = "Furanku";
      textInfoBelong.innerHTML = "Mecha: Tempest";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Furanku";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview furanku") {
    if(localStorage.getItem("Tempest") === "geted") {
      itemImage.className = "image-preview tempest";
      itemName.innerHTML = "Tempest";
      textInfoBelong.innerHTML = "Pilot: Furanku";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Tempest";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview trio-of-enders") {
    if(localStorage.getItem("Cyrus") === "geted") {
      itemImage.className = "image-preview cyrus";
      itemName.innerHTML = "Cyrus";
      textInfoBelong.innerHTML = "Mecha: Trio of Enders";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Cyrus";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview cyrus") {
    if(localStorage.getItem("Trio of Enders") === "geted") {
      itemImage.className = "image-preview trio-of-enders";
      itemName.innerHTML = "Trio of Enders";
      textInfoBelong.innerHTML = "Pilot: Cyrus";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Trio of Enders";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview twilight") {
    if(localStorage.getItem("Fran") === "geted") {
      itemImage.className = "image-preview fran";
      itemName.innerHTML = "Fran";
      textInfoBelong.innerHTML = "Mecha: Twilight";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Fran";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview fran") {
    if(localStorage.getItem("Twilight") === "geted") {
      itemImage.className = "image-preview twilight";
      itemName.innerHTML = "Twilight";
      textInfoBelong.innerHTML = "Pilot: Fran";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Twilight";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview ventorus") {
    if(localStorage.getItem("Jiu Chong") === "geted") {
      itemImage.className = "image-preview jiu-chong";
      itemName.innerHTML = "Jiu Chong";
      textInfoBelong.innerHTML = "Mecha: Ventorus";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the pilot for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Pilot: Jiu Chong";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview jiu-chong") {
    if(localStorage.getItem("Ventorus") === "geted") {
      itemImage.className = "image-preview ventorus";
      itemName.innerHTML = "Ventorus";
      textInfoBelong.innerHTML = "Pilot: Jiu Chong";
    }else{
      textInfoBelong.style.color = "red";
      textInfoBelong.innerHTML = "Get the mecha for view him";
      setTimeout(function() {
        textInfoBelong.innerHTML = "Mecha: Ventorus";
        textInfoBelong.style.color = "var(--color-on)";
      },3000);
    }
  }else
  if(itemImage.className === "image-preview kizuna-ai") {
    textInfoBelong.innerHTML = "Mecha: No mecha for this pilot";
      textInfoBelong.style.color = "red";
    setTimeout(function() {
      textInfoBelong.style.color = "var(--color-on)";
    },400);
    setTimeout(function() {
      textInfoBelong.style.color = "red";
    },800);
    setTimeout(function() {
      textInfoBelong.style.color = "var(--color-on)";
    },1200);
  }else
  if(itemImage.className === "image-preview riko") {
    textInfoBelong.innerHTML = "Mecha: No mecha for this pilot";
      textInfoBelong.style.color = "red";
    setTimeout(function() {
      textInfoBelong.style.color = "var(--color-on)";
    },400);
    setTimeout(function() {
      textInfoBelong.style.color = "red";
    },800);
    setTimeout(function() {
      textInfoBelong.style.color = "var(--color-on)";
    },1200);
  }
}