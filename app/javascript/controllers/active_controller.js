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
    this.#showMaterials(selectedItemName)
  }

  #showMaterials(itemName){
    // get active material name
    // this.cardsTarget.innerHTML = ""
    console.log(this.cardsTarget)
    console.log(itemName)

    [0,1,2,3,4,5].forEach((cardidx) => {
      console.log(cardidx)
      const innerHTMLTag = `<div class="text-center">
      <%= image_tag("materials/#{ @materials["${itemName}"][${cardidx}].name}.png", class:"mat-pic") %>
      <p> X </p>
      </div>`
      console.log("there")
      this.cardsTarget.innerHTML = innerHTMLTag
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
        return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
      }
      else if(gearLevel === 1) {
        return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
      }
      else if(gearLevel === 1) {
        return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
      }
      else if(gearLevel === 1) {
        return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
      }
      else if(gearLevel === 1) {
        return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
      }
      else if(gearLevel === 1) {
        return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
      }
      else if(gearLevel === 1) {
        return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
      }
      else if(gearLevel === 1) {
        return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
      }
      else if(gearLevel === 1) {
        return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
      }
      else if(gearLevel === 1) {
        return {silver: 84016, gold: 300, shards: 3610, oreha: 4, destruction: 358, leapstone: 6}
      }
    }
    else {

    }
  }
}
