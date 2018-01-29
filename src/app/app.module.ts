import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { HomeTabComponent }   from './home/home_tab';
import { DetailTabComponent }   from './detail/detail_tab';
import { AddNewTabComponent }   from './addnew/addnew_tab';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { SignUpComponent }   from './signup/signup';
import "rxjs/Rx";
// import {enableProdMode} from '@angular/core';
// enableProdMode();

//import {enableProdMode} from '@angular/core';

//enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        JsonpModule,
        MatButtonModule, MatCheckboxModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatIconModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatAutocompleteModule
    ],
    declarations: [
        AppComponent,
        HomeTabComponent,
        DetailTabComponent,
        AddNewTabComponent,
        SignUpComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
