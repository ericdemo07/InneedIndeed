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

  person: Person;

  constructor(
    private defaultService: DefaultService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.defaultService.getPerson(params['id'])).subscribe(person => {this.person = person});
  }

  goBack(): void {
    this.location.back();
  }
}
