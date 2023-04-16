import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./homepage/homepage.module').then((m) => m.HomepageModule)
  },
  {
    path: 'page-one',
    loadChildren: () => import('./page-one/page-one.module').then((m) => m.PageOneModule)
  },
  {
    path: 'page-two',
    loadChildren: () => import('./page-two/page-two.module').then((m) => m.PageTwoModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollOffset: [0, 20],
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
