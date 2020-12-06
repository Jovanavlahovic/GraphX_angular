import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {
@Input() description: string;
showLess: boolean = true;
shortText: string;

  constructor() { }

  ngOnInit(): void {
     this.shortText = this.description.slice(0, 120);
  }

  showText(text:string):void{
   if(text == 'longText'){
     this.showLess = false;
   } if(text == 'shortText'){
     this.showLess = true;
   }

  }


}
