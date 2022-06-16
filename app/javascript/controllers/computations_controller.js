import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "service", "success", "progress", "level", "materials"]

  progressBar(event){

    this.itemEventTarget = event.currentTarget
    this.currentLevelTarget = event.currentTarget.children[1].innerHTML
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
      this.#upgradeOnSuccess()
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

  #upgradeOnSuccess(){
    this.currentLevelTarget = `${parseInt(this.currentLevelTarget) + 1}`

    // increase level the active item
    this.levelTarget.innerHTML = `+${parseInt(this.currentLevelTarget)}`

    // increase level of the item in item list

    this.itemEventTarget.setAttribute("data-level", this.currentLevelTarget)
    this.itemEventTarget.children[1].innerHTML = `+${parseInt(this.currentLevelTarget)}`

    // update progress bar
    const baseChance = this.#chance(parseInt(this.currentLevelTarget) + 1)
    this.progressTarget.style = `width:${baseChance}%`
    this.progressTarget.ariaValueNow = `${baseChance}`
    this.progressTarget.children[0].innerHTML = `${baseChance}%`

    // update counter
    this.#updateMaterialsCounter()
  }

    #updateMaterialsCounter(){
      // this.materialsTarget is the attempts div which encloses all of the materials

      [0,1,2,3,4,5].forEach((index) => {

      const currentAmount = parseInt(this.materialsTarget.children[index].dataset.amount)
      const currentGear = this.materialsTarget.children[index].dataset.name

      const imgTag = `<img class="mat-pic" src="/assets/materials/${currentGear}.png">`
      const divTag = `<div class="notification-content" data-action="click->computations#hone">
      <h5>${currentAmount + 10}</h5></div>`

      this.materialsTarget.children[index].setAttribute("data-amount", currentAmount + 10)
      this.materialsTarget.children[index].innerHTML = `${imgTag}${divTag}`

    })

    }

  }
