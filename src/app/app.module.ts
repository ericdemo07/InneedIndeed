import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//material component
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldControl } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//other component
import { AgGridModule } from "ag-grid-angular/main";


//project local component
import { SignUpComponent } from './signup/signup';
import { ArticleListComponent } from './article/articlelist/articlelist';
import { ArticleDetailComponent } from './article/articledetail/articledetail';
import { AddArticleComponent } from './article/addarticle/addarticle';
import { SideBarComponent } from './components/sidebar/sidebar';

//project helper component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import "rxjs/Rx";
// import {enableProdMode} from '@angular/core';
// enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    MatButtonModule, MatCheckboxModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatIconModule, MatToolbarModule, MatCardModule, MatAutocompleteModule,
    MatFormFieldModule, MatInputModule, MatSidenavModule, MatSelectModule,
    MatButtonToggleModule, MatDividerModule, MatListModule, MatSlideToggleModule,
    AgGridModule.withComponents([
      ArticleListComponent
    ])
  ],
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    AddArticleComponent,
    SignUpComponent,
    SideBarComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
