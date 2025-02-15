import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideTranslateVersion } from '../../../ngx-translate-version/src/public-api';
import { VERSION } from '../environments/version';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideTranslateVersion(routes, {
      defaultLanguage: 'en',
      version: VERSION.TAG,
      pathLocales: 'assets/locales.json',
      pathI18n: (lang) => `assets/i18n/${lang}.json`
    })
  ]
};
