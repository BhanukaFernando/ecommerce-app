import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  productList: any [] = [];
  cartObj: any = {
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2023-06-22T17:35:44.514Z"
  }

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    debugger;
    this.loadAllproducts();
  }

  loadAllproducts(){
    debugger;
    this.productService.getAllProducts().subscribe((result: any)=>{
      this.productList = result.data;
    })
  }
  addItemToCart(ProductId: number) {
    debugger;
    this.cartObj.ProductId = ProductId;
    this.productService.addToCart(this.cartObj).subscribe((result: any)=>{
      if(result.result) {
        alert("Product Added To Cart");
        this.productService.cartAddedSubject.next(true);
      }
    })
  }
}
