import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InneedHomeComponent }   from './inneedhome.component';
import { AdvanceInneedSearchComponent }      from './advanceinneedsearch.component';


const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'inneedhome', component: InneedHomeComponent },
    { path: 'search', component: AdvanceInneedSearchComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
