import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, ModuleWithProviders, NgModule, PLATFORM_ID } from '@angular/core';
import { Route } from '@angular/router';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  NGX_TRANSLATE_VERSION_CONFIG_TOKEN,
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
        deps: [HttpClient, PLATFORM_ID, NGX_TRANSLATE_VERSION_CONFIG_TOKEN, APP_BASE_HREF]
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
        }
      ],
      imports: [
        LocalizeRouterModule.forRoot(routes, {
          parser: {
            provide: LocalizeParser,
            useFactory: localizeLoaderFactory,
            deps: [
              TranslateService,
              Location,
              LocalizeRouterSettings,
              HttpClient,
              PLATFORM_ID,
              NGX_TRANSLATE_VERSION_CONFIG_TOKEN,
              APP_BASE_HREF
            ]
          }
        })
      ]
    } as ModuleWithProviders<NgxTranslateVersionModule>;
  }
}
