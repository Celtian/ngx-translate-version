import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageTwoRoutingModule } from './page-two-routing.module';
import { PageTwoComponent } from './page-two.component';

@NgModule({
  declarations: [PageTwoComponent],
  imports: [CommonModule, PageTwoRoutingModule]
})
export class PageTwoModule {}
