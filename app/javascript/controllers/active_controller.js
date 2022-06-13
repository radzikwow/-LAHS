import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "selected" ]

  connect() {
    console.log("hello")
  }

  select(event){
    console.log(this.selectedTarget)
  }
}
