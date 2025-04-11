import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyReviewsComponent } from './happy-reviews.component';

describe('HappyReviewsComponent', () => {
  let component: HappyReviewsComponent;
  let fixture: ComponentFixture<HappyReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappyReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappyReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
