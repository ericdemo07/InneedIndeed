import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

import { SignUpComponent } from './signup/signup';
import { ArticleListComponent } from './article/articlelist/articlelist';
import { ArticleDetailComponent } from './article/articledetail/articledetail';
import { AddArticleComponent } from './article/addarticle/addarticle';

const routes: Routes = [
  { path: '', redirectTo: '/hometab', pathMatch: 'full' },
  { path: 'hometab', component: ArticleListComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: 'addnew', component: AddArticleComponent },
  { path: 'addnew/:id', component: AddArticleComponent },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
