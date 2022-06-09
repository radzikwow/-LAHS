import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "form", "input"]

  connect() {
    // console.log(this.formTarget)
    // console.log(this.inputTargets)
  }

  send(evt) {
    evt.preventDefault();

    // names
    // console.log(this.inputTargets[0].childNodes[1].innerHTML)
    // current_level
    // console.log(this.inputTargets[0].childNodes[5].childNodes[1].value)

    const inputs = this.inputTargets;
    const new_inputs = []

    inputs.map((input) => {
      const obj = {
        name: input.childNodes[1].innerHTML,
        current_level: input.childNodes[5].childNodes[1].value
      }
      new_inputs.push(obj)
      // console.log(obj)
    });

    // console.log(new_inputs)

    fetch('http://127.0.0.1:3000//items/update-all', {
      method: 'POST',
      headers: { "Content-Type": 'application/json'},
      body: JSON.stringify(new_inputs)}).then(response => response.json()).then((data) => {
      console.log(data)
    });
  }
}
