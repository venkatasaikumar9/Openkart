import { Component } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Amazon';
  selectLink: string = 'home';
  selectedProduct: Product;

  constructor(private productListService: ProductListService){

  }

  ngOnInit(){
    this.productListService.productSelectedEvent.subscribe(
      (product:Product)=>{
        this.selectedProduct = product;
      }
    )
  }

  onClick(){
    this.name='Flipkar';
  }
}
