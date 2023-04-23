import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() products?: any[];
  @Output() productAdded = new EventEmitter();
  // addProductToCart(product:any) {
  //   this.productAdded.emit(product);
  //   this.cartProductList.push(product);
  //   console.log("in product",product)
  // }
  addProductToCart(product: any) {
    const productExistInCart = this.cartProductList.find(
      ({ name }: { name: any }) => name === product.name
    ); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1 });
      // enhance "porduct" opject with "num" property
      return;
    }
    productExistInCart.num += 1;
  }
  removeProductToCart(product: any) {
    const productExistInCart = this.cartProductList.find(
      ({ name }: { name: any }) => name === product.name
    ); // find product by name
    // console.log(productExistInCart)
    if (productExistInCart.num!=0) {
      productExistInCart.num -= 1;
      // enhance "porduct" opject with "num" property
      return;
    }
  }
  total() {
    return this.cartProductList.reduce(
      (sum: any, prod: any) => (sum += prod.num),
      0
    );
  }
  productList = [
    { name: 'image1', price: 100 },
    { name: 'image2', price: 200 },
    { name: 'image3', price: 300 },
  ];

  cartProductList: any = [];
}
