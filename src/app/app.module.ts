import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { HomeTabComponent }   from './home/home_tab';
import { DetailTabComponent }   from './detail/detail_tab';
import { AddNewTabComponent }   from './addnew/addnew_tab';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

//import {enableProdMode} from '@angular/core';

//enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        JsonpModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    declarations: [
        AppComponent,
        HomeTabComponent,
        DetailTabComponent,
        AddNewTabComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
