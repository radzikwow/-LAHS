import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "service", "success", "progress", "level", "materials", "cards"]

  connect(){
    this.items = [0,0,0,0,0,0]
  }

  progressBar(event){

    this.itemEventTarget = event.currentTarget
    this.currentLevelTarget = event.currentTarget.children[1].innerHTML
    this.itemName = event.currentTarget.dataset.gear

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

    // update counter of materials
    // console.log(this.materialsTarget)
    this.#updateMaterialsCounter()
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

    // update needed materials (cards)
    this.#updateMaterialsCard(this.itemName, parseInt(this.currentLevelTarget) + 1)
  }

  #updateMaterialsCounter(){
      // this.materialsTarget is the attempts div which encloses all of the materials

      const elements = this.cardsTarget.querySelectorAll(".p-tag")

      elements.forEach((element, index) => {
        this.items[index] += parseInt(element.innerText)
        // materialsAmount.push(parseInt(element.innerText))
      })

      const number = [0,1,2,3,4,5]

      number.forEach((index) => {

        const currentGear = this.materialsTarget.children[index].dataset.name

        const imgTag = `<img class="mat-pic" src="/assets/materials/${currentGear}.png">`
        const divTag = `<div class="notification-content" data-action="click->computations#hone">
        <h5>${this.items[index]}</h5></div>`

        this.materialsTarget.children[index].setAttribute("data-amount", this.items[index])
        this.materialsTarget.children[index].innerHTML = `${imgTag}${divTag}`
      })

  }

  #updateMaterialsCard(gearName, gearLevel){

    this.cardsTarget.innerHTML = ""

    const materialsAmounts = this.#materialsCalculations( gearName, gearLevel)
    const materials = Object.keys(materialsAmounts)

    materials.forEach((material) => {

       const innerHTMLTag = `<div class="text-center">
       <img class="mat-pic" src="/assets/materials/${material}.png">
       <p class="p-tag"> ${materialsAmounts[material]} </p>
       </div>`

       this.cardsTarget.insertAdjacentHTML("beforeend", innerHTMLTag)
    })

  }

  #materialsCalculations(gearName, gearLevel){
      if (gearName === "weapon"){
        if (gearLevel === 0){
          return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
        }
        else if(gearLevel === 1) {
          return {silver: 84696, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 8}
        }
        else if(gearLevel === 2) {
          return {silver: 85396, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 8}
        }
        else if(gearLevel === 3) {
          return {silver: 110768, gold: 300, shards: 5188, oreha: 6, destruction: 516, leapstone: 10}
        }
        else if(gearLevel === 4) {
          return {silver: 111508, gold: 300, shards: 5188, oreha: 6, destruction: 516, leapstone: 10}
        }
        else if(gearLevel === 5) {
          return {silver: 112248, gold: 320, shards: 5188, oreha: 6, destruction: 516, leapstone: 12}
        }
        else if(gearLevel === 6) {
          return {silver: 137680, gold: 320, shards: 6766, oreha: 6, destruction: 672, leapstone: 12}
        }
        else if(gearLevel === 7) {
          return {silver: 138460, gold: 320, shards: 6766, oreha: 6, destruction: 672, leapstone: 14}
        }
        else if(gearLevel === 8) {
          return {silver: 139280, gold: 320, shards: 6766, oreha: 8, destruction: 672, leapstone: 14}
        }
        else if(gearLevel === 9) {
          return {silver: 99556, gold: 320, shards: 8344, oreha: 8, destruction: 830, leapstone: 16}
        }
        else if(gearLevel === 10) {
          return {silver: 100396, gold: 330, shards: 8344, oreha: 8, destruction: 830, leapstone: 16}
        }
        else if(gearLevel === 11) {
          return {silver: 101256, gold: 330, shards: 8344, oreha: 8, destruction: 830, leapstone: 18}
        }
        else if(gearLevel === 12) {
          return {silver: 114508, gold: 330, shards: 9924, oreha: 10, destruction: 986, leapstone: 18}
        }
        else if(gearLevel === 13) {
          return {silver: 115408, gold: 330, shards: 9924, oreha: 10, destruction: 986, leapstone: 20}
        }
        else if(gearLevel === 14) {
          return {silver: 116328, gold: 330, shards: 9924, oreha: 10, destruction: 986, leapstone: 20}
        }
        else if(gearLevel === 15) {
          return {silver: 247944, gold: 410, shards: 13324, oreha: 12, destruction: 1144, leapstone: 22}
        }
        else if(gearLevel === 16) {
          return {silver: 324004, gold: 480, shards: 18136, oreha: 14, destruction: 1144, leapstone: 24}
        }
        else if(gearLevel === 17) {
          return {silver: 425652, gold: 540, shards: 24584, oreha: 16, destruction: 1144, leapstone: 28}
        }
        else if(gearLevel === 18) {
          return {silver: 566744, gold: 640, shards: 33550, oreha: 18, destruction: 1300, leapstone: 30}
        }
        else{
          return {silver: 755484, gold: 730, shards: 45568, oreha: 20, destruction: 1300, leapstone: 32}
        }
      }
      else {
        if (gearLevel === 0){
          return {silver: 19320, gold: 160, shards: 58, oreha: 4, guardian: 216, leapstone: 4}
        }
        else if(gearLevel === 1) {
          return {silver: 19800, gold: 160, shards: 58, oreha: 4, guardian: 216, leapstone: 6}
        }
        else if(gearLevel === 2) {
          return {silver: 20300, gold: 170, shards: 58, oreha: 4, guardian: 216, leapstone: 6}
        }
        else if(gearLevel === 3) {
          return {silver: 20800, gold: 170, shards: 82, oreha: 4, guardian: 310, leapstone: 6}
        }
        else if(gearLevel === 4) {
          return {silver: 21300, gold: 170, shards: 82, oreha: 4, guardian: 310, leapstone: 6}
        }
        else if(gearLevel === 5) {
          return {silver: 21820, gold: 170, shards: 82, oreha: 4, guardian: 310, leapstone: 8}
        }
        else if(gearLevel === 6) {
          return {silver: 22380, gold: 170, shards: 108, oreha: 6, guardian: 404, leapstone: 8}
        }
        else if(gearLevel === 7) {
          return {silver: 22920, gold: 170, shards: 108, oreha: 6, guardian: 404, leapstone: 10}
        }
        else if(gearLevel === 8) {
          return {silver: 23480, gold: 170, shards: 108, oreha: 8, guardian: 404, leapstone: 10}
        }
        else if(gearLevel === 9) {
          return {silver: 24040, gold: 170, shards: 132, oreha: 8, guardian: 498, leapstone: 10}
        }
        else if(gearLevel === 10) {
          return {silver: 24640, gold: 170, shards: 132, oreha: 8, guardian: 498, leapstone: 10}
        }
        else if(gearLevel === 11) {
          return {silver: 25240, gold: 170, shards: 132, oreha: 8, guardian: 498, leapstone: 12}
        }
        else if(gearLevel === 12) {
          return {silver: 25860, gold: 170, shards: 158, oreha: 8, guardian: 592, leapstone: 12}
        }
        else if(gearLevel === 13) {
          return {silver: 26500, gold: 170, shards: 158, oreha: 8, guardian: 592, leapstone: 12}
        }
        else if(gearLevel === 14) {
          return {silver: 27160, gold: 180, shards: 158, oreha: 8, guardian: 592, leapstone: 12}
        }
        else if(gearLevel === 15) {
          return {silver: 27820, gold: 210, shards: 216, oreha: 10, guardian: 686, leapstone: 14}
        }
        else if(gearLevel === 16) {
          return {silver: 28420, gold: 250, shards: 292, oreha: 10, guardian: 686, leapstone: 16}
        }
        else if(gearLevel === 17) {
          return {silver: 29040, gold: 280, shards: 396, oreha: 12, guardian: 686, leapstone: 16}
        }
        else if(gearLevel === 18) {
          return {silver: 29660, gold: 320, shards: 536, oreha: 14, guardian: 780, leapstone: 18}
        }
        else{
          return {silver: 30320, gold: 350, shards: 728, oreha: 14, guardian: 780, leapstone: 20}
        }

      }
  }
}
