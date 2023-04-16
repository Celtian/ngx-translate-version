import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Routes } from '@angular/router';
import { LocalizeParser, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export interface NgxTranslateVersionConfig {
  version: string;
  defaultLanguage: string;
  pathLocales: string;
  pathI18n: (lang: string) => string;
}

export const defaultNgxTranslateVersionConfig: NgxTranslateVersionConfig = {
  version: '0.0.0',
  defaultLanguage: 'en',
  pathLocales: 'assets/locales.json',
  pathI18n: (lang) => `assets/i18n/${lang}.json`
};

export const NGX_TRANSLATE_VERSION_CONFIG_TOKEN = new InjectionToken<NgxTranslateVersionConfig>(
  'ngx-translate-version-config'
);

export const NGX_TRANSLATE_VERSION_ROUTES_TOKEN = new InjectionToken<Routes>('ngx-translate-version-routes');

export class TranslateCustomLoader implements TranslateLoader {
  constructor(private http: HttpClient, private config: NgxTranslateVersionConfig, private baseHref: string) {}

  public getTranslation(lang: string): Observable<any> {
    return this.http.get<any>(`${this.baseHref}${this.config.pathI18n(lang)}?v=${this.config.version}`);
  }
}

export function translateLoaderFactory(
  httpClient: HttpClient,
  config: NgxTranslateVersionConfig,
  baseHref: string
): TranslateLoader {
  return new TranslateCustomLoader(httpClient, config, baseHref);
}

export class LocalizeCustomLoader extends LocalizeParser {
  constructor(
    translate: TranslateService,
    location: Location,
    settings: LocalizeRouterSettings,
    private http: HttpClient,
    private config: NgxTranslateVersionConfig,
    private baseHref: string,
    private routesFromToken: Routes
  ) {
    super(translate, location, settings);
  }

  public load(routes: Routes): Promise<any> {
    return new Promise((resolve: any) => {
      this.http
        .get<any>(`${this.baseHref}${this.config.pathLocales}?v=${this.config.version}`)
        .subscribe((data: any) => {
          this.locales = data.locales;
          this.prefix = data.prefix;
          this.init(this.routesFromToken).then(resolve);
        });
    });
  }
}

export function localizeLoaderFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
  http: HttpClient,
  baseHref: string,
  config: NgxTranslateVersionConfig,
  routes: Routes
): LocalizeParser {
  return new LocalizeCustomLoader(translate, location, settings, http, config, baseHref, routes);
}
