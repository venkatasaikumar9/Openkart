import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { Product } from '../product.model';//model

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',//view
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {//controller

  products: Product[];//declaration

  //@Output() productSelectedParent = new EventEmitter<Product>;

   constructor(private productListService: ProductListService,
                private router: Router, private route: ActivatedRoute){

   }

   ngOnInit(){
    this.products = this.productListService.getProducts(); //assignment
    this.productListService.productsChanged.subscribe(
      (products: Product[])=>{
        this.products = products;
      }
    )
   }

   onNewProduct(){
    this.router.navigate(['new'], {relativeTo: this.route});
   }

 
}
