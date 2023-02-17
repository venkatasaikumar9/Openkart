import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "./product.model";


export class ProductListService{

    productSelectedEvent = new EventEmitter<Product>();
    productsChanged = new Subject<Product[]>();

    getProducts(){
        return this.products.slice();
    }

    getProductById(index: number){
      return this.products[index];
    }

    createProduct(product: Product){
      this.products.push(product);
      this.productsChanged.next(this.products.slice());
    }

    updateProduct(index: number, product: Product){
      this.products[index] = product;
      this.productsChanged.next(this.products.slice());
    }

    products: Product[] = [
        new Product(
          'Y 81', 
          'Vivo Mobile with best camera features',
          'https://i.gadgets360cdn.com/large/vivo_y81_front_back_1537436177499.jpg',
          15000.00,
          'ViVo'
        ),
        new Product(
          'APPLE 14', 
          'Experience the brand of APPLE & APPLE MAC',
          'https://m.media-amazon.com/images/I/61bK6PMOC3L._SX522_.jpg',
          40000.00,
          'APPLE'
        )
      ]

}