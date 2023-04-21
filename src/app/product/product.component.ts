import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  count:number=0
  add(){
    this.count=this.count+1
  }
  remove(){
    this.count=this.count-1
  }
}
