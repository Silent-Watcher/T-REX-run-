const $ = document;
const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

const worldElem = $.querySelector('[data-world]');

setWorldScale();
window.addEventListener('resize', setWorldScale);

function setWorldScale() {
  let WorldScale;
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    WorldScale = window.innerWidth / WORLD_WIDTH;
  } else {
    WorldScale = window.innerHeight / WORLD_HEIGHT;
  }
  worldElem.style.width = `${WORLD_WIDTH * WorldScale}px`;
  worldElem.style.height = `${WORLD_HEIGHT * WorldScale}px`;
}
