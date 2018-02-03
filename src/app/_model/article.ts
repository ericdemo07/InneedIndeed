export class Article {
  constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private city: string,
    private state: string,
    private postalCode: number,
    private addressLine1: string,
    private addressLine2: string,
    private donationAmount: number,
    private content: string,
    private img: string,
    private mailId: string,
    private phone: number,
    private representativeId: string,
    private likesCount: number,
    private shareCount: number,
    private dob: Date
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.donationAmount = donationAmount;
    this.content = content;
    this.img = img;
    this.mailId = mailId;
    this.phone = phone;
    this.representativeId = representativeId;
    this.likesCount = likesCount;
    this.shareCount = shareCount;
    this.dob = dob;
  }

  public getId() {
    return this.id;
  }

  public getFullName() {
    return this.firstName + " " + this.lastName;
  }

  public getImg() {
    return this.img;
  }

  public getMail() {
    return this.mailId;
  }
}

//        { id: , name: 'ZooZoo', area: 'Area-9', cols: , rows: 2, content: 'This is a demo text will be replaced by original text in original.', img:'lib/img/inneed_img.jpg'},
