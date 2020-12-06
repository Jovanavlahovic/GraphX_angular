import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CommentListComponent } from './graph-cards/comment-list/comment-list.component';
import { GraphCardsComponent } from './graph-cards/graph-cards.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'graphX', component: GraphCardsComponent},
  {path: '', redirectTo: 'graphX', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
