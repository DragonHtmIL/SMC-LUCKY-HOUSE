var GHPATH = '/SMC-LUCKY-HOUSE';
var APP_PREFIX = 'gppwa_';
let VERSIONNAME = "1.0.2-20092025-beta";
var VERSION = VERSIONNAME;

var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index_data`,
  `${GHPATH}/index.html`,
  `${GHPATH}/manifest.webmanifest`,

  `${GHPATH}/Index_data/audio`,
  `${GHPATH}/Index_data/audio/Gacha aud press.mp3`,
  `${GHPATH}/Index_data/audio/Gacha aud pressed.mp3`,
  `${GHPATH}/Index_data/audio/Gacha aud pressed_long.mp3`,
  `${GHPATH}/Index_data/audio/Gacha aud start.mp3`,
  `${GHPATH}/Index_data/audio/press_btn.wav`,

  `${GHPATH}/Index_data/scripts`,
  `${GHPATH}/Index_data/scripts/continue.js`,
  `${GHPATH}/Index_data/scripts/tabs.js`,
  `${GHPATH}/Index_data/scripts/window_load.js`,

  `${GHPATH}/Index_data/scripts/mecha`,
  `${GHPATH}/Index_data/scripts/mecha/openx1.js`,

  `${GHPATH}/Index_data/scripts/pilot`,
  `${GHPATH}/Index_data/scripts/pilot/openx1.js`,

  `${GHPATH}/Index_data/styles`,
  `${GHPATH}/Index_data/scripts/classes.css`,
  `${GHPATH}/Index_data/scripts/root.css`,
  `${GHPATH}/Index_data/scripts/styles.css`,

  `${GHPATH}/Index_data/textures`,

  `${GHPATH}/Index_data/textures/cards`,

  `${GHPATH}/Index_data/textures/cards/mechas`,

  `${GHPATH}/Index_data/textures/cards/mechas/default`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Akashic.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Alborada.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Andromeda.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Arthur.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Aurora.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Boltus.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Caramel.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Death Knel.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Doomlight.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Dreadwolf.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Firefox.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Firestar.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Flamenco.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Gabriel.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Gaia.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Guerilla Hunter.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Hotsteel.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Hurricane.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Jojo.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Lancelot.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Michael.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Moon Rabbit.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Nebula.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Neutron Star.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Northern Knight.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Pulsar.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Ranger.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Raven.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Shiranui.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Skyfall.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Skyfire.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Skylark.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Snow Mirage.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Tempest.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Trio of Enders.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Twilight.png`,
  `${GHPATH}/Index_data/textures/cards/mechas/default/Ventorus.png`,

  `${GHPATH}/Index_data/textures/cards/pilots/default`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Aya.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Belladonna.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Cyrus.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Fran.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Furanku.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Iori.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Ivan.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Jaka.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Jiu Chomg.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Joanna.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Kije.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Kikina.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Kizuna Ai.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Lillian.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Lysa.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Matilda.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Mia.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Mila.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Mobius.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Nighthalk.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Ning.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Norma.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Opal.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Purity.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/RED.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Riko.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Rom.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Serena.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Shin.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Silver Deacon.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Tarantula.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Vanessa.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Villar.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Vita.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Yang.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Yulia.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Yutong.png`,
  `${GHPATH}/Index_data/textures/cards/pilots/default/Zoe.png`,

  `${GHPATH}/Index_data/textures/gatcha`,
  `${GHPATH}/Index_data/textures/gatcha/1d.png`,
  `${GHPATH}/Index_data/textures/gatcha/2c.png`,
  `${GHPATH}/Index_data/textures/gatcha/3b.png`,
  `${GHPATH}/Index_data/textures/gatcha/4a.png`,
  `${GHPATH}/Index_data/textures/gatcha/5s.png`,
  `${GHPATH}/Index_data/textures/gatcha/6sp.png`,
  `${GHPATH}/Index_data/textures/gatcha/7ss.png`,

  `${GHPATH}/Index_data/textures/gui`,
  `${GHPATH}/Index_data/textures/gui/bg_inner.png`,
  `${GHPATH}/Index_data/textures/gui/bg_overlay.png`,
  `${GHPATH}/Index_data/textures/gui/company.png`,
  `${GHPATH}/Index_data/textures/gui/floor.png`,
  `${GHPATH}/Index_data/textures/gui/list_bg.png`,
  `${GHPATH}/Index_data/textures/gui/logo.png`,
  `${GHPATH}/Index_data/textures/gui/opx1.png`,
  `${GHPATH}/Index_data/textures/gui/opx10.png`,
  `${GHPATH}/Index_data/textures/gui/tab_horizontal.png`,
  `${GHPATH}/Index_data/textures/gui/tab_off.png`,
  `${GHPATH}/Index_data/textures/gui/tab_vertical.png`,
  `${GHPATH}/Index_data/textures/gui/tabs_continer.png`,
  `${GHPATH}/Index_data/textures/gui/cards_continer.png`,

  `${GHPATH}/Index_data/textures/system`,
  `${GHPATH}/Index_data/textures/system/icon.png`,

  `${GHPATH}/Index_data/textures/videos`,
  `${GHPATH}/Index_data/textures/videos/Gacha vid press.mp4`,
  `${GHPATH}/Index_data/textures/videos/Gacha vid pressed 1c.mp4`,
  `${GHPATH}/Index_data/textures/videos/Gacha vid pressed 2b.mp4`,
  `${GHPATH}/Index_data/textures/videos/Gacha vid pressed 3a.mp4`,
  `${GHPATH}/Index_data/textures/videos/Gacha vid pressed 4s.mp4`,
  `${GHPATH}/Index_data/textures/videos/Gacha vid pressed 5sp.mp4`,
  `${GHPATH}/Index_data/textures/videos/Gacha vid pressed 6ss.mp4`,
  `${GHPATH}/Index_data/textures/videos/Gacha vid pressed.mp4`,
  `${GHPATH}/Index_data/textures/videos/Gacha vid start.mp4`
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(URLS)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    if (response) {
      return response;
    }
    return fetch(event.request);
    })
  );
});