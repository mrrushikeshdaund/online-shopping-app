import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSallingComponent } from './top-salling.component';

describe('TopSallingComponent', () => {
  let component: TopSallingComponent;
  let fixture: ComponentFixture<TopSallingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSallingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
