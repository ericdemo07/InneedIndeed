import { Component } from '@angular/core';
import {IMyOptions} from 'mydaterangepicker';
import { BiToolCommonService } from './bitoolcommon.service';

@Component({
    moduleId: module.id,
    selector: 'data-extract',
    templateUrl: './dataextract.component.html',
    styleUrls: ['./dataextract.component.css']
})
export class DataExtractComponent {

    inputfile: any = "";
    private myDateRangePickerOptions: IMyOptions = {
        dateFormat: 'dd.mm.yyyy',
    };
    constructor(private bitoolcommonservice: BiToolCommonService) {
    }
    radioItems = 'PC MOBILE'.split(' ');
    model = { date: '', devicetype: 'PC', unique: false, uniquecount: false, completematch: false, onlyeasyid: false };
    submitted = true;
    inputtypes = [{ id: '1', value: 'Data#EasyId' }, { id: '2', value: 'Data#Url' }, { id: '3', value: 'Data#SearchWord' }, { id: '4', value: 'Data#Domain' }];
    response: String;
    onSubmit() {
      this.submitted = false;
      this.response = "We are uploading inputfile from your system to our server ...";
        var dataExtractFormData: any = new FormData();
        for (var property in this) {
            if (property === "model") {
                dataExtractFormData.append("modelData", JSON.stringify(this[property]));
            }
        }
        //this.submitted = true;
        dataExtractFormData.append("inputfile", this.inputfile);
        this.bitoolcommonservice.create(dataExtractFormData).subscribe((response) => {
            this.response = response;
            //console.log("Response : "+response);
            this.submitted = false;
        });
    }
    file: File;
    flagFileExist:Boolean=false;
    fileName:any;
    onChange(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
        let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        this.inputfile = this.file;
        this.flagFileExist = true;
        if(typeof this.file != "undefined")
        {
          this.fileName = this.file.name;
        }
        else{
          this.fileName = '';
        }
    }
    uniqueCheckBoxEvent() {
        if (this.model.uniquecount == true) {
            this.model.unique = true;
        }
        else {
            this.model.unique = false;
        }
    }
    reset() {
        this.submitted = true;
        if (this.model.date != null) {
        }
        this.model = { date: '', devicetype: 'PC', unique: false, uniquecount: false, completematch: false, onlyeasyid: false };
    }
}
