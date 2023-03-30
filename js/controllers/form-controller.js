function State() {
  this.btnSave = null;
  this.btnClear = null;

  this.inputCep = null;
  this.inputStreet = null;
  this.inputNumber = null;
  this.inputCity = null;

  this.errorCep = null;
  this.errorNumber = null;
}

const state = new State();

export function init() {
  state.inputCep = document.forms.newAddress.cep;
  state.inputCity = document.forms.newAddress.city;
  state.inputStreet = document.forms.newAddress.street;
  state.inputNumber = document.forms.newAddress.number;

  state.btnClear = document.forms.btnClear.btnClear;
  state.btnSave = document.forms.btnSave.btnSave;

  console.log(inputCep);
}
