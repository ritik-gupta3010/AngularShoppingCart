import { Component, Input } from '@angular/core';
import { cartDetails, objectTotal } from '../common/cartDetails';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() product: any=[];
  cart :any
  totalItem:any
  constructor()
  {
    this.cart=cartDetails
    this.totalItem =objectTotal.total
    console.log(this.cart)
    console.log(this.totalItem)
  }
}
