import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent }   from './home/home_tab';
import { DetailTabComponent }   from './detail/detail_tab';


const routes: Routes = [
    // { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'hometab', component: HomeTabComponent },
    { path: 'detail/:id', component: DetailTabComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
