import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateVersionModule } from 'projects/ngx-translate-version/src/public-api';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTranslateVersionModule.forRoot(routes, {
      defaultLanguage: 'en',
      version: '99.88.77'
    })
  ],
  bootstrap: [AppComponent]
  // providers: [LocalizeRouterService]
})
export class AppModule {}
