import { Component } from '@angular/core';
import { AdsBannerComponent } from '../../components/ads-banner/ads-banner.component';
import { NewArrivalsComponent } from '../../components/new-arrivals/new-arrivals.component';
import { TopSallingComponent } from '../../components/top-salling/top-salling.component';
import { DressStyleComponent } from '../../components/dress-style/dress-style.component';
import { HappyReviewsComponent } from '../../components/happy-reviews/happy-reviews.component';
import { CopyrightsComponent } from '../../components/copyrights/copyrights.component';

@Component({
  selector: 'app-home-page',
  imports: [
    AdsBannerComponent,
    NewArrivalsComponent,
    TopSallingComponent,
    DressStyleComponent,
    HappyReviewsComponent,
    CopyrightsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
