import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private ProdctService:ProductService) {}

    newProduct = new FormGroup(
      {id: new FormControl("", [Validators.required, Validators.min(7), Validators.max(100)]),
      Title: new FormControl("", [Validators.required, Validators.minLength(3)]),
      src: new FormControl("../../assets/img/workplace.jpg", Validators.required),
      des: new FormControl("", [Validators.required, Validators.minLength(3)]),
    }
    )
  ngOnInit(): void {
  }

  get id(){
    return this.newProduct.get("id") as FormControl
  }

  get Title(){
    return this.newProduct.get("Title") as FormControl
  }

  get src(){
    return this.newProduct.get("src") as FormControl
  }

  get des(){
    return this.newProduct.get("des") as FormControl
  }

  Save(val:any){
    console.log(val)
    this.ProdctService.AddNEw(val);
  }
}
