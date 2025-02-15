import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  imports: [CommonModule, HomepageRoutingModule, HomepageComponent]
})
export class HomepageModule {}
