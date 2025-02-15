import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one.component';

@NgModule({
  imports: [CommonModule, PageOneRoutingModule, PageOneComponent]
})
export class PageOneModule {}
