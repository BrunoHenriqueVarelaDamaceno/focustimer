import * as sounds from './sounds.js'

export function forest () {
  document.getElementById('forest').classList.toggle('card-active');
}

export function rain () {
  document.getElementById('rain').classList.toggle('card-active');
}

export function coffeeShop () {
  document.getElementById('coffee-shop').classList.toggle('card-active');
}

export function fire () {
  document.getElementById('fire').classList.toggle('card-active');
}

export function pauseAll() {
 if(sounds.audioRain.paused === false){
   sounds.audioRain.pause()
 }
 if(sounds.audioCoffeeShop.paused === false){
   sounds.audioCoffeeShop.pause()
}
if(sounds.audioForest.paused === false){
  sounds.audioForest.pause()
}
if(sounds.audioFire.paused === false){
  sounds.audioFire.pause()
}
}

export const disableAll = () => {
 const card = document.querySelector('.card-active')
 if(card) {
    card.classList.remove('card-active')
  }
}