class FieldCheckbox {
  static toggle = (target) => {
    target.toggleAttribute('active')
  }
}

window.fielCheckbox = FieldCheckbox
