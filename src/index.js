export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const parameter1 = /^[a-z]+[a-z\-_\d]*[a-z]+$/i.test(this.name);
    const parameter2 = /(\d){4,}/i.test(this.name);
    return parameter1 === true && parameter2 === false
      ? "Имя удовлетворяет требованиям"
      : "Имя НЕ удовлетворяет требованиям!";
  }
}
