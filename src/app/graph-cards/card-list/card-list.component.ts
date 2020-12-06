import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardsService } from 'src/app/service/cards.service';
import { Card } from '../model/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
@Input() card: Card;
@Output() cardId: EventEmitter<number> = new EventEmitter();
  constructor(private service: CardsService) { }

  ngOnInit(): void {
  }

  changeGrade(grade:number){
    this.card.grade = grade;
    this.service.updateCard(this.card).subscribe(x => this.card = x);
  }

  sendId(id:number){
    this.cardId.emit(id);
  }


}
