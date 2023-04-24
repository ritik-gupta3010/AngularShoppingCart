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
      return;
    }
    productExistInCart.num += 1;
  }
  removeProductToCart(product: any) {
    console.log('cart', this.cartProductList);
    const productExistInCart = this.cartProductList.find(
      ({ name }: { name: any }) => name === product.name
    ); // find product by name
    // console.log("in product remove cart ")
    console.log('exit', productExistInCart);
    console.log(product);

    if (productExistInCart.num != 0) {
      productExistInCart.num -= 1;
    }
    if (productExistInCart.num == 0) {
      // this.cartProductList.pop({...product})
      let itemTORemove = product.id;
      console.log(itemTORemove);
      let newArr1 = this.cartProductList.filter(
        (obj: any) => obj.id !== itemTORemove
      );
      console.log(newArr1);

      this.cartProductList = [...newArr1];
    }
  }
  total() {
    return this.cartProductList.reduce(
      (sum: any, prod: any) => (sum += prod.num),
      0
    );
  }
  productList = [
    { id: 1, name: 'image1', price: 100 },
    { id: 2, name: 'image2', price: 200 },
    { id: 3, name: 'image3', price: 300 },
  ];

  cartProductList: any = [];
}
