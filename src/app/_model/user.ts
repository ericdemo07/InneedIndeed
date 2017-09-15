export class User {
  constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private mailId: string,
    private phone: number,
    private password: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mailId = mailId;
    this.phone = phone;
    this.password = password;
  }

  getId() {
    return this.id;
  }

  getPassword() {
    return this.password;
  }

  getMailId() {
    return this.mailId;
  }

  getPhone() {
    return this.phone;
  }

  setPhone(phone: String) {
    this.phone = +phone;
    this.mailId = '';
  }

}
