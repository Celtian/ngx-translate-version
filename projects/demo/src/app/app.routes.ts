import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./homepage/homepage.module').then((m) => m.HomepageModule)
  },
  {
    path: 'page-one',
    loadChildren: () => import('./page-one/page-one.module').then((m) => m.PageOneModule)
  },
  {
    path: 'page-two',
    loadChildren: () => import('./page-two/page-two.module').then((m) => m.PageTwoModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
