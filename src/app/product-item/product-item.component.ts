import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
  @Input() index: number;
 // @Output() selectedItem = new EventEmitter<null>;

  constructor(private productListService: ProductListService){}

}
