export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    age: number
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
  }
  getBirthdayYear() {
    let data = new Date().getFullYear();
    return data - this.age;
  }
}
