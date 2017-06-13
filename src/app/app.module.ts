import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { HomeTabComponent }   from './home/home_tab';
import { AppRoutingModule }     from './app-routing.module';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

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
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        HomeTabComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
