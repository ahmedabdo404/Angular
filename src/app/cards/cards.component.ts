import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
  @Input() cardData?:string;
  @Input() cardList?:string[];
  @Output() cardout = new EventEmitter<string>();
  ngOnInit(): void {
  }

  
  GetName(i?:string){
    this.cardout.emit(i);
  }
}
