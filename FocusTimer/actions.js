import state from "./state.js";
import * as timer from "./timer.js";
import * as el from './elements.js'

export function play() {
  state.isRunning = true

  timer.countdown();
}

export function reset() {
  state.isRunning = false;

  timer.updateDisplay();
}

export function addFiveMinute() {
  let minutes =  Number(el.minutes.textContent)
  if(minutes >= 60){
    return
  }
  el.minutes.textContent = String(minutes + 5).padStart(2, '0')
  
}

export function removeFiveMinutes() {
  let minutes =  Number(el.minutes.textContent)
  if(minutes < 1) {
    return
  }
  el.minutes.textContent = String(minutes - 5).padStart(2, '0')
}