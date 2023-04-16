import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one.component';

@NgModule({
  declarations: [PageOneComponent],
  imports: [CommonModule, PageOneRoutingModule]
})
export class PageOneModule {}
