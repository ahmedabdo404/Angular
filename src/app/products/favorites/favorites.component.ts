import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  constructor() { }
  @Input() favoriteproducts: any[]=[];
  ngOnInit(): void {
  }

  
  // GetName(i?:string){
  //   this.cardout.emit(i);
  // }

}