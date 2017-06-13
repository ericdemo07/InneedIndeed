import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent }   from './home/home_tab';


const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'inneedhome', component: HomeTabComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
