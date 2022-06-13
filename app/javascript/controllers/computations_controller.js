import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "service", "success" ]

  hone(event){
    this.successTarget.innerHTML = ""
    const level = this.serviceTarget.dataset.currentLevel
    const baseChance = this.#chance(level)
    // console.log(baseChance)
    // console.log(this.serviceTarget.dataset.chances)
    // Returns a random number between 100 and 0
    const diceRoll = Math.round(Math.random() * 101)
    // console.log(diceRoll)
    // call chance method to che chance
    const success = diceRoll <= baseChance ? "Success" : "Fail"
    // console.log(success)
    this.successTarget.insertAdjacentHTML("beforeend", success)
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

    // switch(level){
    //   case (level >= 0 && level <= 6):
    //     return 100;
    //   case 7:
    //     return 60;
    //   case 8:
    //     return 45;
    //   case (level >= 9 && level <= 11):
    //     return 30;
    //   case (level >= 12 && level <= 14):
    //     return 15;
    //   case (level >= 15 && level <= 17):
    //     return 10;
    //   case (level >= 18 && level <= 19):
    //     return 5;
    // }

  }
}
