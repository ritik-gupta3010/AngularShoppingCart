import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoneComponent } from './productone.component';

describe('ProductoneComponent', () => {
  let component: ProductoneComponent;
  let fixture: ComponentFixture<ProductoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
