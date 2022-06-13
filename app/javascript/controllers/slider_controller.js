import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "number" ]

  update(event){
    console.log("i connected")
    const sliderId = event.currentTarget.id
    const sliderValue = event.currentTarget.value
    this.numberTargets.forEach(number => {
      if (number.id == sliderId) {
        number.innerText = `${sliderValue}/12`
      }
    })
  }
}
