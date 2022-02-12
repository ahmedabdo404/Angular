import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.css']
})
export class PdetailsComponent implements OnInit {
  constructor(private productService: ProductService, private activeRout: ActivatedRoute) { }
  product: any= {};

  ngOnInit(): void {
    this.activeRout.params.subscribe((x) => {
      console.log(x);
      this.product = this.productService.getById(x['id'])
    })
  }

}
