import { Component, Input, Output, EventEmitter } from '@angular/core';
import { cartDetails, objectTotal } from '../common/cartDetails';
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
      ({ id }: { id: any }) => id === product.id
    ); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1 });
    }
    else{
      productExistInCart.num += 1;
    }
    const productExistInCartDetals = cartDetails.find(
      ({ id }: { id: any }) => id === product.id
    ); // find product by name
    if (!productExistInCartDetals) {
      cartDetails.push({ ...product, num: 1 });
    }
    else{
      productExistInCartDetals.num += 1;
    }
    console.log(this.cartProductList);
    console.log(cartDetails);
  }
  removeProductToCart(product: any) {
    console.log('cart', this.cartProductList);
    const productExistInCart = this.cartProductList.find(
      ({ name }: { name: any }) => name === product.name
    ); // find product by name
    // console.log("in product remove cart ")
    console.log('exist', productExistInCart);
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
    const productExistInCartDetails = cartDetails.find(
      ({ id }: { id: any }) => id === product.id
    ); // find product by name
    if (productExistInCartDetails.num != 0) {
      productExistInCartDetails.num -= 1;
    }
    if (productExistInCartDetails.num == 0) {
      // this.cartProductList.pop({...product})
      let itemTORemove = product.id;
      console.log(itemTORemove);
      let newArr1 = cartDetails.filter(
        (obj: any) => obj.id !== itemTORemove
      );
      console.log(newArr1);

      // cartDetails = [...newArr1];
    }
  }
  total() {
    const totalCount = this.cartProductList.reduce(
      (sum: any, prod: any) => (sum += prod.num),
      0
    );
    objectTotal.total = totalCount;
    return objectTotal.total
  }
  productList = [
    {
      id: 1,
      name: 'data:image/png;base64,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',
      price: 100,
    },
    {
      id: 2,
      name: 'data:image/png;base64,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',
      price: 200,
    },
    {
      id: 3,
      name: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAB3CAMAAAB17y8xAAAA81BMVEUrtlYMp1AnMzMAi1YitFF3zI4AoT6l3bOp2rsYoEYnGy8pKDFlw4UnMTO348NlxoAAsUQNcjsnqFEAfj0nLTIoRzeCy5cSskmQ0aknJDDT5dze8uSZ2KsFdTqE0pnLzc0lmWU7RUUeSTkkVjlGyWz///+ky7Rmr44AhkwjPzgKgk8MHx90enqnqqoeLCw9umEKYD7M6dIAkUHw+fMnOTQpnE4Sckooe0VPwG8AqSYArTdtwIkmmVQAizInEC0/OEUOABonACwpZT8phEdChFcLRCgeUz4ocEFHnHG/2s1dpH1whX1tkYNrt46mvbEAPSoRMif4AGlyAAAFMElEQVR4nO3a/X+iNhwHcDS5u04a62E8z9p7WD0retusAtr12JNutt122/7/v2ZRniGJCKGIr3x+qq9o4F34hgRQFBkZGRkZGRkZGRkZGRkZGRmZkjOdTo+0swMDLwxjeNESk/uroTGE5VGGw+GsKSh90lm5lKsLQWmWSVHuzozmXRcKSfdF02iWR4E/9rvCtg5rs3tRfWVIq+8MOiIOS02btditz0BxJBcvcufLlzf9c3bzXdEYl3JvnL3KmTOS/ltm8+xV93ko5Dz7Jmfm87n99NOc0dp9f/VslE/XPzfy5pcPvzJafnv3nJQBrufNtx8+M1p6bUmRFEmRFEmRlFhwjwSdAkUd6Jq27qgnQFlvJ+pQWfaqTsFLd5IOV8wvVoOC6v5yQzOrTcGrYOW0YZV+NSjqQ0AZVJsSPioVp9Tr/k+sMesrFaGoa8YIhpD/uSKU7XVl99V17LqCrJV31awKBTVWtmXZg5ikR4QbXC0KKX1smjj2rd52ZNPGqGIUStTB9tdQU9ExUKbQ0rJSsOn0AtfqMVAUbQKU+0wUZFpuN3A3ySybMgUA2NmOSsMOOlr1yqd8JBQwz0JRl+E72uT3ZVO2EtDOQFEfIj1pJi6XMr90KJfTQyn4OtoTtDgUtfB7xtBqe5SPzKk7PWisxTtb8yhvCqZoIKBcMym0w4WwlegN/s6jvC2UUgNpKONFPdmk2pSHWJ+4lJdFUuw0FHUBFom7LOGVWJDp0x+MgiuaYoMUFHxLmm/jM68V9cHidAYxvZcdpVaYxAIpKHiwa99ELLhD73E669p0i0MpyqKBFBTcAU46oVbUiQ9eAcWdjTEoBVlACgoaT1zKJLhjhBoW47k1oSjwgXbLz6MUYrHTUOoL4GXhn2L+0phKIbMxSukXSIGuhE/BgSQo/d6S+S6BQ1E6SYtPEW+xQAqKW/JenNJXB+y3IlyKhRJdBRTRFg2koOANiGZb+njD6dalEAuHItgCUlCQOYlRJiZCmDF4RShw2eBQhFr0NJSEhFjIzIvz0g2czlruXw+YQxFosYOde3wyLh91h/JDJL2FnqCAxTvOa3Dd9zNj5m0jtmQoiBKSgD+Hw+HNaDR6vPz613eR/D2i5Cv3LarIC4cmZlNEWSwQozzdkBg330fyzw0le160moUo0DIRmyLGokXOmEfDMEa6rpMT7N/PofynU2LDLi+tK9KZf1Sg3eNQhFhiZ3+73U6WfXLw2mXf9rutViv4BJcqhyLAYtP2MU6JXOX98IZhalZqgRTIkEQpgiSKEiwNkpS8Fou2j3FK4iq/C20BvC+aP4xRKPksGm0f4xSGJNMG/WGMRsljqTElIQqj5LNtEdoNDiWHhVUoEQpdkqFQHMsScyiZLRxJQFGpJZ/j/+cMYwxKxn6ZJR+m7O6vJJK8e3dAdgsxoRR2yYcoIkve3/D26R6LksnClbgUZIqXkNmYyqFksPAl3lFZTCjRckYhpc+mHGzhlXyIMqalkzu8o3KghTlfiVOoQbnDpxxk4Ze8R1GxF1V4Gq/FUPZLtpTFrZ/X4jPnUA6w7JcQSnjZe15AzjiU1Ja9hUKiR9a9RaR5zpaktaSREEvbz8tiwpOks6QolGg0/jaLSgESqxxJCsqhErskyX5LdST7LOlK/jgkXAvkLlFoKVXCoxxc8uVKOJbKDF77LdWTMCz7J/axlFvyXmiUQyV62Qg3J1DyXvJLSpp50XICJe8ln+Q4St5LnpI/LknIUrX5CiWVH7yCnELJezkdiWOpesl7Uf4HQ1c8i0DMfPgAAAAASUVORK5CYII=',
      price: 300,
    },
  ];

  cartProductList: any = [];
}
