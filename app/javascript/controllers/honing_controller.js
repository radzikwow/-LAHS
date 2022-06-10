import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "success" ]

  connect() {
    console.log("hi")
  }

  hone(event){
    console.log(event)
    this.successTarget.classList.toggle("d-none")
  }
}
