import * as toggle from "./functioncards.js";
import * as card from "./varcards.js";
import * as sounds from "./sounds.js";

card.forest.addEventListener("click", () => {
  if (card.forest.classList.contains("card-active")) {
    toggle.disableAll();
    toggle.pauseAll();
    return;
  }

  toggle.disableAll();
  toggle.pauseAll();
  toggle.forest();
  sounds.audioForest.play();
});
card.rain.addEventListener("click", () => {
 if (card.rain.classList.contains("card-active")) {
    toggle.disableAll();
    toggle.pauseAll();
    return;
  }
  toggle.disableAll();
  toggle.pauseAll();
  toggle.rain();
  sounds.audioRain.play();
});

card.coffeeShop.addEventListener("click", () => {
  if (card.coffeeShop.classList.contains("card-active")) {
    toggle.disableAll();
    toggle.pauseAll();
    return;
  }
  toggle.disableAll();
  toggle.pauseAll();
  toggle.coffeeShop();
  sounds.audioCoffeeShop.play();
});

card.fire.addEventListener("click", () => {
  if (card.fire.classList.contains("card-active")) {
    toggle.disableAll();
    toggle.pauseAll();
    return;
  }
  toggle.disableAll();
  toggle.pauseAll();
  toggle.fire();
  sounds.audioFire.play();
});
