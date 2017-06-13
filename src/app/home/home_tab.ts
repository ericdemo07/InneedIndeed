import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../_services/default_service';
// import { Inneed } from '../_model/person';

@Component({
    moduleId: module.id,
    templateUrl: 'home_tab.html',
    styleUrls: ['home_tab.css']
})

export class HomeTabComponent {
    constructor(private inneedCommonService: DefaultService) { }
    // inneeduserlist: Inneed[];

    // getHeroes(): void {
    //     this.inneedCommonService.getInneedAsList().then(inneeduserlist => this.inneeduserlist = inneeduserlist);
    // }
    // ngOnInit(): void {
    //     this.getHeroes();
    // }
}
