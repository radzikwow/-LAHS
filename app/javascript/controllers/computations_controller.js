import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "service", "success", "progress", "number", "level"]

  progressBar(event){
    // console.log(event.currentTarget.children[1].innerHTML)
    this.itemEventTarget = event.currentTarget
    console.log(this.itemEventTarget.dataset.level)
    this.currentLevelTarget = event.currentTarget.children[1].innerHTML
    // console.log(this.currentLevelTarget)
    const level = parseInt(event.currentTarget.dataset.level, 10)
    const baseChance = this.#chance(level)
    this.progressTarget.style = `width:${baseChance}%`
    this.progressTarget.ariaValueNow = `${baseChance}`
    this.progressTarget.children[0].innerHTML = `${baseChance}%`
  }

  hone(event){
    this.successTarget.innerHTML = ""
    // const level = this.serviceTarget.dataset.currentLevel
    // const levelInt = parseInt(level, 10)
    const baseChance = this.#chance(parseInt(this.currentLevelTarget))

    // Returns a random number [0, 100]
    const diceRoll = Math.round(Math.random() * 101)

    // call chance method to che chance
    const success = diceRoll <= baseChance ? "Success" : "Fail"
    this.successTarget.insertAdjacentHTML("beforeend", success)

    if (success === "Success" && parseInt(this.currentLevelTarget) < 20) {

      this.currentLevelTarget = `${parseInt(this.currentLevelTarget) + 1}`

      // increase level the active item
      this.levelTarget.innerHTML = `+${parseInt(this.currentLevelTarget)}`

      // increase level of the item in item list
      console.log(this.itemEventTarget.dataset.level)
      this.itemEventTarget.setAttribute("data-level", this.currentLevelTarget)
      console.log(this.itemEventTarget)
      this.itemEventTarget.children[1].innerHTML = `+${parseInt(this.currentLevelTarget)}`


      const baseChance = this.#chance(parseInt(this.currentLevelTarget) + 1)
      this.progressTarget.style = `width:${baseChance}%`
      this.progressTarget.ariaValueNow = `${baseChance}`
      this.progressTarget.children[0].innerHTML = `${baseChance}%`
    }

  }

  #chance(level){
    // const chances = JSON.parse(this.serviceTarget.dataset.chances)
    if (level >= 0 && level <= 6) {
      return 100
    }
    else if (level === 7){
      return 60
    }
    else if (level === 8){
      return 45
    }
    else if (level >= 9 && level <= 11){
      return 30
    }
    else if (level >= 12 && level <= 14){
      return 15
    }
    else if (level >= 15 && level <= 17){
      return 10
    }
    else {
      return 5
    }
  }

}
