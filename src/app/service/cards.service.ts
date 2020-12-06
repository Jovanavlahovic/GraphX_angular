import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Card, CardList } from '../graph-cards/model/card.model';
import { CommentDetails } from '../graph-cards/model/commentList.model';

const baseUrl = 'http://localhost:3000/api/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getCards(params): Observable<CardList>{
       let queryParams = {};

       if (params) {
         queryParams = {
           params: new HttpParams()
             .set('page', (params.page && params.page.toString()) || '1')
             .set(
               'pageSize',
               (params.pageSize && params.pageSize.toString()) || '5'
             )};
        }
    return this.http.get(baseUrl, queryParams).pipe(map(x => new CardList(x)))
  }

  updateCard(card: Card):Observable<Card>{
    return this.http.put(`${baseUrl}/${card._id}`, card).pipe(map(x => new Card(x)));
  }

  getComments(id:number): Observable<CommentDetails[]>{
    return this.http.get(`${baseUrl}/${id}/comments`).pipe(map((x:any) => x.results as Array<CommentDetails>))
  }

  addComment(comment: CommentDetails): Observable<CommentDetails>{
    return this.http.post(`${baseUrl}/${comment.cards}/comments`, comment).pipe(map(x => new CommentDetails(x)))
  }
}
