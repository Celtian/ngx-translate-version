import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateVersionModule } from 'projects/ngx-translate-version/src/public-api';
import { VERSION } from '../environments/version';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTranslateVersionModule.forRoot(routes, {
      defaultLanguage: 'en',
      version: VERSION.TAG,
      pathLocales: 'assets/locales.json',
      pathI18n: (lang) => `assets/i18n/${lang}.json`
    })
  ],
  bootstrap: [AppComponent]
  // providers: [LocalizeRouterService]
})
export class AppModule {}
