import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shoppingcart';
  productList = [
    {name: 'ima', price: 100},
    {name: 'image2', price: 200},
    {name: 'image3', price: 300}
   ];
  cartProductList : any[] = [];
  addProductToCart(product:any) {
    this.cartProductList.push(product);
    console.log("aa raha h")
  }
}
