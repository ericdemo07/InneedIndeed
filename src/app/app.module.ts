import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeTabComponent } from './home/home_tab';
import { DetailTabComponent } from './detail/detail_tab';
import { AddNewTabComponent } from './addnew/addnew_tab';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { SignUpComponent } from './signup/signup';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from './components/sidebar/sidebar';
import { MatFormFieldControl } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import "rxjs/Rx";
// import {enableProdMode} from '@angular/core';
// enableProdMode();

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
    MatIconModule, MatToolbarModule, MatCardModule, MatAutocompleteModule,
    MatFormFieldModule, MatInputModule, MatSidenavModule, MatSelectModule,
    MatButtonToggleModule, MatDividerModule, MatListModule
  ],
  declarations: [
    AppComponent,
    HomeTabComponent,
    DetailTabComponent,
    AddNewTabComponent,
    SignUpComponent,
    SideBarComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
