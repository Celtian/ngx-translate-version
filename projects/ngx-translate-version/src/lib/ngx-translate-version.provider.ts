import { APP_BASE_HREF, Location, PlatformLocation } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { EnvironmentProviders, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { Route } from '@angular/router';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  NGX_TRANSLATE_VERSION_CONFIG_TOKEN,
  NGX_TRANSLATE_VERSION_ROUTES_TOKEN,
  NgxTranslateVersionConfig,
  defaultNgxTranslateVersionConfig,
  localizeLoaderFactory,
  translateLoaderFactory
} from './ngx-translate-version.utils';

export const provideTranslateVersion = (
  routes: Route[],
  config: Partial<NgxTranslateVersionConfig>
): EnvironmentProviders => {
  return makeEnvironmentProviders([
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: translateLoaderFactory,
          deps: [HttpClient, NGX_TRANSLATE_VERSION_CONFIG_TOKEN, APP_BASE_HREF]
        }
      }),
      LocalizeRouterModule.forRoot(routes, {
        parser: {
          provide: LocalizeParser,
          useFactory: localizeLoaderFactory,
          deps: [
            TranslateService,
            Location,
            LocalizeRouterSettings,
            HttpClient,
            APP_BASE_HREF,
            NGX_TRANSLATE_VERSION_CONFIG_TOKEN,
            NGX_TRANSLATE_VERSION_ROUTES_TOKEN
          ]
        }
      })
    ),
    {
      provide: APP_BASE_HREF,
      useFactory: (platformLocation: PlatformLocation): string => platformLocation.getBaseHrefFromDOM(),
      deps: [PlatformLocation]
    },
    {
      provide: NGX_TRANSLATE_VERSION_CONFIG_TOKEN,
      useValue: { ...defaultNgxTranslateVersionConfig, ...config }
    },
    {
      provide: NGX_TRANSLATE_VERSION_ROUTES_TOKEN,
      useValue: routes
    }
  ]);
};
