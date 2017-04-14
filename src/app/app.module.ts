import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { DataExtractComponent }   from './dataextract.component';
import { FetchByQueryComponent }      from './fetchbyquery.component';
import { AppRoutingModule }     from './app-routing.module';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';

//import {enableProdMode} from '@angular/core';

//enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        MyDateRangePickerModule,
        HttpModule,
        JsonpModule,
        MdButtonModule,
        MdCheckboxModule,
        // BrowserAnimationsModule,
        NoopAnimationsModule
    ],
    declarations: [
        AppComponent,
        DataExtractComponent,
        FetchByQueryComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
