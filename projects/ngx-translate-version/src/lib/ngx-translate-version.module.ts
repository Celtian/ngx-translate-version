import { APP_BASE_HREF, Location, PlatformLocation } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
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

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient, NGX_TRANSLATE_VERSION_CONFIG_TOKEN, APP_BASE_HREF]
      }
    }),
    LocalizeRouterModule.forRoot([], {
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
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (platformLocation: PlatformLocation): string => platformLocation.getBaseHrefFromDOM(),
      deps: [PlatformLocation]
    }
  ],
  exports: [TranslateModule, LocalizeRouterModule]
})
export class NgxTranslateVersionModule {
  constructor(
    private translate: TranslateService,
    @Inject(NGX_TRANSLATE_VERSION_CONFIG_TOKEN)
    private config: NgxTranslateVersionConfig = defaultNgxTranslateVersionConfig
  ) {
    this.translate.setDefaultLang(this.config.defaultLanguage);
  }

  public static forRoot(
    routes: Route[],
    config: Partial<NgxTranslateVersionConfig>
  ): ModuleWithProviders<NgxTranslateVersionModule> {
    return {
      ngModule: NgxTranslateVersionModule,
      providers: [
        {
          provide: NGX_TRANSLATE_VERSION_CONFIG_TOKEN,
          useValue: { ...defaultNgxTranslateVersionConfig, ...config }
        },
        {
          provide: NGX_TRANSLATE_VERSION_ROUTES_TOKEN,
          useValue: routes
        }
      ]
    };
  }
}
