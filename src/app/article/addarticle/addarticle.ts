import 'rxjs/add/operator/switchMap';

import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';

import { DefaultService } from '../../_services/default_service';
import { Article } from '../../_model/article';

@Component({
  // moduleId: module.id,
  templateUrl: './addarticle.html',
  styleUrls: ['./addarticle.css']
})


export class AddArticleComponent {
  person: Article = new Article('', '', '', '', '', null, '', '', null, '', '', '', null, '', null, null, null);
  stateCtrl: FormControl;
  filteredStates: any;
  private id: any;

  constructor(
    private defaultService: DefaultService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.stateCtrl = new FormControl();
    // this.filteredStates = this.stateCtrl.valueChanges
    //   .startWith(null)
    //   .map(name => this.filterStates(name));
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    console.log("in edit phase for id [" + this.id);
    if (this.id != null) {
      this.route.params.switchMap((params: Params) => this.defaultService.getPerson(params['id']).then(
        function(response) {
          var temp: Article;
          var person = response.message;
          temp = new Article(person._id, person.firstName, person.lastName, person.city, person.state,
            person.postalCode, person.addressLine1, person.addressLine2, person.donationAmount,
            person.content, person.img, person.mailId, person.phone,
            person.representativeId, person.likesCount, person.shareCount, person.dob);
          return temp;
        }
      )).subscribe(person => this.person = person);
    }
  }

  goBack(): void {
    this.location.back();
  }

  savePersonDeatils(): void {
    this.defaultService.savePersonDeatils(this.person);
    this.location.back();
  }

  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];


  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.states;
  }
}
