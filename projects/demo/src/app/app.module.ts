import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateVersionModule } from 'projects/ngx-translate-version/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxTranslateVersionModule.forRoot([], {
      defaultLanguage: 'en',
      version: '10.0.0'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
