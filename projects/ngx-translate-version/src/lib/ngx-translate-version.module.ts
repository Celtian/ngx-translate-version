import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, ModuleWithProviders, NgModule, PLATFORM_ID } from '@angular/core';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18N_CONFIG_TOKEN, I18nConfig, defaultI18nConfig } from './ngx-translate-version.utils';
import { localizeLoaderFactory, translateLoaderFactory } from './translate-loaders';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient, PLATFORM_ID, I18N_CONFIG_TOKEN, APP_BASE_HREF]
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
          PLATFORM_ID,
          I18N_CONFIG_TOKEN,
          APP_BASE_HREF
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
    @Inject(I18N_CONFIG_TOKEN) private config: I18nConfig = defaultI18nConfig
  ) {
    this.translate.setDefaultLang(this.config.defaultLanguage);
  }

  public static forRoot(config: Partial<I18nConfig>): ModuleWithProviders<any> {
    return {
      ngModule: NgxTranslateVersionModule,
      providers: [
        {
          provide: I18N_CONFIG_TOKEN,
          useValue: { ...defaultI18nConfig, ...config }
        }
      ]
    };
  }
}
