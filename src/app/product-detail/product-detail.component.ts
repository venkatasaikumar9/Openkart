import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
 //@Input() sProduct: Product;
 sProduct: Product;
 id: number;

  constructor(private productListService: ProductListService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(){
    console.log('>>>>product-detail comp>>');
    this.route.params.subscribe(
      
      (params: Params)=>{
        this.id = +params['id'];
        this.sProduct = this.productListService.getProductById(this.id);
        console.log('>>>>product-detail comp router params subscribe>>>',this.sProduct, this.id);
      }
    )
  }

}
