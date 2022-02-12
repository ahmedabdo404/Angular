import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product:any;
  
  // @Input() cardList?:any[];
  @Output() getfav = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
  }
  
  addtofavorite(i?:string){
    this.getfav.emit(i);
    console.log(i)
  }
}
