import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "honed", "gear" ]

  select(event){
    // get id of the div
    const selectedItemName = event.currentTarget.dataset.gear
    const selectedItem = event.currentTarget

    this.gearTargets.forEach(gear=>{
      gear.classList.remove("active-item")
    })

    // toggle active class on listed item
    selectedItem.classList.add("active-item")

    // display selected item on honing position
    const honingItemImg = this.honedTarget.children[0]
    const imgTag = `<img class=\"selected_item\" src=\"/assets/items/${selectedItemName}.png\">`
    honingItemImg.outerHTML = imgTag
  }
}
