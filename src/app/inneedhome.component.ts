import { Component, OnInit } from '@angular/core';
import {IMyOptions} from 'mydaterangepicker';
import { InneedCommonService } from './inneedcommon.service';
import { Inneed } from './inneedmodel';

@Component({
    moduleId: module.id,
    selector: 'data-extract',
    templateUrl: './inneedhome.component.html',
    styleUrls: ['./inneedhome.component.css']
})

export class InneedHomeComponent {
    constructor(private inneedCommonService: InneedCommonService) { }
    inneeduserlist: Inneed[];

    getHeroes(): void {
        this.inneedCommonService.getInneedAsList().then(inneeduserlist => this.inneeduserlist = inneeduserlist);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
}
