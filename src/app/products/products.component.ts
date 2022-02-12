import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private ProdctService:ProductService) { }
  products:any[] = [];
  
  title = 'my-app';
  
  ngOnInit(): void {
    this.products = this.ProdctService.getAllP();
    console.log(this.products)

  }
  
  favoriteProducts:any[] = []
  show(product:any){
    this.favoriteProducts.push(product);
    console.log(name)

  }
}
