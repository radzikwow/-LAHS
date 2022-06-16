import { Controller } from "stimulus"
import ContextModuleFactory from "webpack/lib/ContextModuleFactory"

export default class extends Controller {
  static targets = [ "honed", "gear", "level", "img", "progressbar" ]

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
    const activeImage = event.currentTarget.children[0].src
    console.log(event.currentTarget.children[0].src)

    const imgTag = `background-image: url("${activeImage}"); background-size: cover;
    background-position: center; background-repeat: no-repeat; height: 100px; width: 100px;`
    honingItemImg.setAttribute("style", imgTag)
    // `<img class=\"selected_item\" src=\"/assets/items/${selectedItemName}.png\">`
    // honingItemImg.outerHTML = imgTag

    this.levelTarget.innerHTML = selectedItemLevel

    this.progressbarTarget.classList.remove("d-none")
  }
}
