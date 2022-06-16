import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "honed", "gear", "level", "img", "progressbar", "cards"]

  select(event){
    // get id of the div
    const selectedItemName = event.currentTarget.dataset.gear
    const selectedItem = event.currentTarget
    const selectedItemLevel = selectedItem.children[1].innerHTML

    this.gearTargets.forEach(gear=>{
      gear.classList.remove("active-item")
    })

    // add active class on listed item
    selectedItem.classList.add("active-item")

    // display selected item on honing position
    const honingItemImg = this.imgTarget

    const imgTag = `background-image: url(\"/assets/items/${selectedItemName}.png\"); background-size: cover;
    background-position: center; background-repeat: no-repeat; height: 100px; width: 100px;`
    honingItemImg.setAttribute("style", imgTag)
    // `<img class=\"selected_item\" src=\"/assets/items/${selectedItemName}.png\">`
    // honingItemImg.outerHTML = imgTag

    this.levelTarget.innerHTML = selectedItemLevel

    this.progressbarTarget.classList.remove("d-none")

    // update materials based on active item
    this.#showMaterials(selectedItemName, selectedItemLevel)
  }

  #showMaterials(itemName, itemlevel){
    // get active material name
    this.cardsTarget.innerHTML = ""

    const materialsAmounts = this.#materialsCalculations(itemName, itemlevel)
    const materials = Object.keys(materialsAmounts)

    materials.forEach((material) => {

      const innerHTMLTag = `<div class="text-center">
      <img class="mat-pic" src="/assets/materials/${material}.png">
      <p class="p-tag"> ${materialsAmounts[material]} </p>
      </div>`

      this.cardsTarget.insertAdjacentHTML("beforeend", innerHTMLTag)
    })

  }
  // materials calculations
  #materialsCalculations(gearName, gearLevel){
    if (gearName === "weapon"){
      if (gearLevel === 0){
        return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
      }
      else if(gearLevel === 1) {
        return {silver: 84696, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 8}
      }
      else if(gearLevel === 2) {
        return {silver: 85396, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
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
      else if(gearLevel === 13) {
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
