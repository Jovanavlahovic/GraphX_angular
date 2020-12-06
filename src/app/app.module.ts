import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { GraphCardsComponent } from './graph-cards/graph-cards.component';
import { CardListComponent } from './graph-cards/card-list/card-list.component';
import { CommentListComponent } from './graph-cards/comment-list/comment-list.component';
import { ShowMoreComponent } from './graph-cards/show-more/show-more.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GraphCardsComponent,
    CardListComponent,
    CommentListComponent,
    ShowMoreComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
