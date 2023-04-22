import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() products?: any[];
  productList = [
    {name: 'image1', price: 100},
    {name: 'image2', price: 200},
    {name: 'image3', price: 300}
   ];
  cartProductList = [];
  count:number=0
  add(){
    this.count=this.count+1
  }
  remove(){
    this.count=this.count-1
  }
}
