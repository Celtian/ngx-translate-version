import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { PageOneComponent } from './page-one.component';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), LocalizeRouterModule.forChild(routes)],
  exports: [RouterModule, LocalizeRouterModule]
})
export class PageOneRoutingModule {}
