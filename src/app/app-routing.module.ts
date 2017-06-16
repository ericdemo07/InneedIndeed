import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent }   from './home/home_tab';
import { DetailComponent }   from './detail/detail_tab';


const routes: Routes = [
    // { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'hometab', component: HomeTabComponent },
    { path: 'detail', component: DetailComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
