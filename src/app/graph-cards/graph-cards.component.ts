import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CardsService } from '../service/cards.service';
import { CardList } from './model/card.model';
import { CommentDetails } from './model/commentList.model';

@Component({
  selector: 'app-graph-cards',
  templateUrl: './graph-cards.component.html',
  styleUrls: ['./graph-cards.component.css'],
})
export class GraphCardsComponent implements OnInit {
  cardList: CardList;
  activePage: number = 1;
  numbOfPages: number;
  cardId: number;
  commentList: CommentDetails[];
  params = {
    page: 1,
    pageSize: 5,
  };

  constructor(private service: CardsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCards();
  }

  ngOnChange(): void {}

  getCards(): void {
    this.service.getCards(this.params).subscribe((x) => {
      this.cardList = x;
      this.numbOfPages = Math.ceil(this.cardList.count / this.params.pageSize);
    });
  }

  setActivePage(page: number): void {
    if (page >= 1 && page <= this.numbOfPages) {
      this.activePage = page;
      this.params.page = this.activePage;
      this.getCards();
    }
  }

  setPageSize(number: number): void {
    this.params.pageSize = number;
    this.getCards();
  }

  getCardId(id: number): void {
    this.cardId = id;
    this.getComments();
  }

  getComments(): void {
    this.service.getComments(this.cardId).subscribe((x) => {
      this.commentList = x;
      console.log(this.commentList);
    });
  }

  refreshComments(comment: CommentDetails):void{
    this.service.addComment(comment).subscribe(x => {
        this.service.getComments(comment.cards).subscribe(x => this.commentList = x
        )
      });
  }
}
