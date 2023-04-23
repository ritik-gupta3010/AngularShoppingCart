import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productone',
  templateUrl: './productone.component.html',
  styleUrls: ['./productone.component.css']
})
export class ProductoneComponent {
  @Input() product?: any;
  @Output() productAdded = new EventEmitter();
  @Output() productremoved = new EventEmitter();
  count=0  
  addProductToCart(product:any) {
    this.productAdded.emit(product);
    this.count=this.count+1;
    console.log("in product one add",product)
  }
  removeProductToCart(product:any) {
    if(this.count!=0)
    {
      this.productremoved.emit(this.product)
      this.count=this.count-1;
    }
    console.log("in product one removed",product)
  }
}
