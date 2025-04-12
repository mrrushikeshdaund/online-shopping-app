import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      );
    },
  },
  {
    path: 'details/:id',
    loadComponent: () => {
      return import('./pages/details-page/details-page.component').then(
        (m) => m.DetailsPageComponent
      );
    },
  },
  {
    path: 'category',
    loadComponent: () => {
      return import('./pages/category-page/category-page.component').then(
        (m) => m.CategoryPageComponent
      );
    },
  },
  {
    path: 'admin',
    loadComponent: () => {
      return import('./pages/admin/admin.component').then(
        (m) => m.AdminComponent
      );
    },
  },
];
