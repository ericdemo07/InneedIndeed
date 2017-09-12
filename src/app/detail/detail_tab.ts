import 'rxjs/add/operator/switchMap';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DefaultService } from '../_services/default_service';
import { Person } from '../_model/person';

@Component({
  moduleId: module.id,
  templateUrl: './detail_tab.html',
  styleUrls: ['./detail_tab.css']
})

export class DetailTabComponent {
  person: any;
  flag: boolean;
  constructor(
    private defaultService: DefaultService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.defaultService.getPersonById(params['id']).then(
      function(response) {
        var temp: Person;
        var person = response.message;
        temp = new Person(person._id, person.firstName, person.lastName, person.city, person.state,
          person.postalCode, person.addressLine1, person.addressLine2, person.donationAmount,
          person.content, person.img, person.mailId, person.phone,
          person.representativeId, person.likesCount, person.shareCount, person.dob);
        return temp;
      }
    )).subscribe(person => this.person = person);
  }

  open(): void {
    var options = {
      "key": "rzp_test_IEjF0FvPW3jvgf",
      "amount": "200000", // 2000 paise = INR 20
      "name": this.person.getFullName(),
      "description": "Donation for upliftment of society",
      "image": "../../" + this.person.getImg(),
      "handler": function(response: any) {
        alert(response.razorpay_payment_id);
      },
      "prefill": {
        "name": this.person.getFullName(),
        "email": this.person.getMail()
      },
      "notes": {
        "address": "Hello World"
      },
      "theme": {
        "color": "#607D8B"
      }
    };
    //  var rzp1 = new Razorpay(options); //this method is imported in index.html
    //  rzp1.open();
  }
  goBack(): void {
    this.location.back();
  }
}
