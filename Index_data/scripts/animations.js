const slidemechaimages = [
  'Akashic.png','Alborada.png','Andromeda.png','Arthur.png','Aurora.png','Boltus.png',
  'Caramel.png','Death Knell.png','Doomlight.png','Dreadwolf.png','Firefox.png','Firestar.png',
  'Flamenco.png','Gabriel.png','Gaia.png','Guerilla Hunter.png','Hotsteel.png','Hurricane.png',
  'Jojo.png','Lancelot.png','Michael.png','Moon Rabbit.png','Nebula.png','Neutron Star.png',
  'Northern Knight.png','Pulsar.png','Ranger.png','Raven.png','Shiranui.png','Skyfall.png',
  'Skyfire.png','Skylark.png','Snow Mirage.png','Tempest.png','Trio of Enders.png','Twilight.png',
  'Ventorus.png'
];
const slidepilotimages = [
  'Aya.png','Belladonna.png','Cyrus.png','Fran.png','Furanku.png','Iori.png',
  'Ivan.png','Jaka.png','Jiu Chong.png','Joanna.png','Kije.png','Kikina.png',
  'Kizuna Ai.png','Lillian.png','Lysa.png','Matilda.png','Mia.png','Mila.png',
  'Mobius.png','Nighthalk.png','Ning.png','Norma.png','Opal.png','Purity.png',
  'RED.png','Riko.png','Rom.png','Serena.png','Shin.png','Silver Deacon.png',
  'Tarantula.png','Vanessa.png','Villar.png','Vita.png','Yang.png','Yulia.png',
  'Yutong.png','Zoe'
];
const basePathMecha = 'Index_data/textures/images/mecha/default/';
const basePathPilot = 'Index_data/textures/images/pilot/default/';
let indexMecha = 1;
let indexPilot = 1;
const mechacontent = document.getElementById('mechacontent');
const pilotcontent = document.getElementById('pilotcontent');
function changeBackgroundMecha() {
  mechacontent.style.backgroundImage = `url('${basePathMecha}${slidemechaimages[indexMecha]}')`;
  indexMecha = (indexMecha + 1) % slidemechaimages.length;
};
function changeBackgroundPilot() {
  pilotcontent.style.backgroundImage = `url('${basePathPilot}${slidepilotimages[indexPilot]}')`;
  indexPilot = (indexPilot + 1) % slidepilotimages.length;
}