import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPopupComponent } from './orders-popup.component';

describe('OrdersPopupComponent', () => {
  let component: OrdersPopupComponent;
  let fixture: ComponentFixture<OrdersPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
