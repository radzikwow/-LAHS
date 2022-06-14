import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "honed" ]

  connect() {
    console.log("hello")
  }

  select(event){
    // get id of the div
    const selectedItemName = event.originalTarget.parentElement.attributes[0]
    const selectedItem = event.originalTarget.parentElement

    // toggle active class on listed item
    selectedItem.classList.toggle("active-item")

    // display selected item on honing position
    const honingItemImg = this.honedTarget.children[0]
    const imgTag = `<img class=\"selected_item\" src=\"/assets/items/${selectedItemName.value}.png\">`
    honingItemImg.outerHTML = imgTag
  }
}
