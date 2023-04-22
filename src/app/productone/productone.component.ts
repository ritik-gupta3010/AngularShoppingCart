import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productone',
  templateUrl: './productone.component.html',
  styleUrls: ['./productone.component.css']
})
export class ProductoneComponent {
  @Input() product?: any;
  
}
