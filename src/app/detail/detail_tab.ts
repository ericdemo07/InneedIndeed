import 'rxjs/add/operator/switchMap';
import { Component} from '@angular/core';
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
    this.route.params.switchMap((params: Params) => this.defaultService.getPersonById(params['id'])).subscribe(person => this.person = person.message );
  }

  open(): void {
    var person = 	new Person(this.person._id, this.person.firstName, this.person.lastName, this.person.city, this.person.state,
            this.person.postalCode, this.person.addressLine1, this.person.addressLine2, this.person.donationAmount,
            this.person.content, this.person.img, this.person.mailId, this.person.phone,
            this.person.representativeId, this.person.likesCount, this.person.shareCount, this.person.dob);
    var options = {
      "key": "rzp_test_IEjF0FvPW3jvgf",
      "amount": "200000", // 2000 paise = INR 20
      "name": person.getFullName(),
      "description": "Donation for upliftment of society",
      "image": "../../"+person.getImg(),
      "handler": function(response: any) {
        alert(response.razorpay_payment_id);
      },
      "prefill": {
        "name": person.getFullName(),
        "email": person.getMail()
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
