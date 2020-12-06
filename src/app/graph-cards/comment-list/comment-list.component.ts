import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CardsService } from 'src/app/service/cards.service';
import { CommentDetails } from '../model/commentList.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
cardId: number;
@Input() commentList: CommentDetails[];
newComment: CommentDetails = new CommentDetails();
@Output() cardAdded: EventEmitter<CommentDetails> = new EventEmitter();

  constructor(private service: CardsService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    
  }


  addComment():void{
    this.newComment.cards = this.commentList[0].cards;
    this.cardAdded.emit(this.newComment);
  }

}
