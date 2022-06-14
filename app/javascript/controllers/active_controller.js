import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "honed" ]

  connect() {
    console.log("hello")
  }

  select(event){
    // get id of the div
    console.log(event.originalTarget.parentElement.attributes[0])
    const selectedItemId = event.originalTarget.parentElement.attributes[0]
    const selectedItem = event.originalTarget.parentElement

    // toggle active class on listed item
    selectedItem.classList.toggle("active")


  }
}
