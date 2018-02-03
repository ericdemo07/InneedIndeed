import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent } from './home/home_tab';
import { DetailTabComponent } from './detail/detail_tab';
import { AddNewTabComponent } from './addnew/addnew_tab';
import { SignUpComponent } from './signup/signup';
import { RouterLinkActive } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/hometab', pathMatch: 'full' },
  { path: 'hometab', component: HomeTabComponent },
  { path: 'detail/:id', component: DetailTabComponent },
  { path: 'addnew', component: AddNewTabComponent },
  { path: 'addnew/:id', component: AddNewTabComponent },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, RouterLinkActive]
})
export class AppRoutingModule { }
