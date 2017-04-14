import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataExtractComponent }   from './dataextract.component';
import { FetchByQueryComponent }      from './fetchbyquery.component';


const routes: Routes = [
    { path: '', redirectTo: '/dataextraction', pathMatch: 'full' },
    { path: 'dataextraction', component: DataExtractComponent },
    { path: 'fetchfromquery', component: FetchByQueryComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
