<p align="center">
  <a href="https://github.com/Celtian/ngx-translate-version" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">NgxTranslateVersion</h1>
</p>

[![npm version](https://badge.fury.io/js/ngx-translate-version.svg)](https://badge.fury.io/js/ngx-translate-version)
[![Package License](https://img.shields.io/npm/l/ngx-translate-version.svg)](https://www.npmjs.com/ngx-translate-version)
[![NPM Downloads](https://img.shields.io/npm/dm/ngx-translate-version.svg)](https://www.npmjs.com/ngx-translate-version)
[![Snyk](https://snyk.io/advisor/npm-package/ngx-translate-version/badge.svg)](https://snyk.io/advisor/npm-package/ngx-translate-version)
[![stars](https://badgen.net/github/stars/celtian/ngx-translate-version)](https://github.com/celtian/ngx-translate-version/)
[![forks](https://badgen.net/github/forks/celtian/ngx-translate-version)](https://github.com/celtian/ngx-translate-version/)
[![HitCount](http://hits.dwyl.com/celtian/ngx-translate-version.svg)](http://hits.dwyl.com/celtian/ngx-translate-version)

> Angular module that provides version to your language files

> ✓ _Angular 17 compatible_

Here's the [demo](http://celtian.github.io/ngx-translate-version/)

## Install

1. Use yarn (or npm) to install the package

```terminal
yarn add ngx-translate-version
```

2. Add NgxTranslateVersionModule into your module `imports`

```typescript
  import { NgxTranslateVersionModule } from 'ngx-translate-version';

  @NgModule({
   // ...
   imports: [
     // ...
     NgxTranslateVersionModule.forRoot(routes, {
       defaultLanguage: 'en',
       version: VERSION.TAG,
       pathLocales: 'assets/locales.json',
       pathI18n: (lang) => `assets/i18n/${lang}.json`
     })
   ]
  })
```

## Options

| Option              | Type                     | Default                              | Description                           |
| ------------------- | ------------------------ | ------------------------------------ | ------------------------------------- |
| **defaultLanguage** | string                   | `en`                                 | Default language of your appliceation |
| **version**         | string                   | `0.0.0`                              | Version of your application           |
| **pathLocales**     | string                   | `assets/locales.json`                | Path to file with locales             |
| **pathI18n**        | (lang: string) => string | `(lang) => assets/i18n/${lang}.json` | Path to faile with translations       |

## Compatibility

| Angular | ngx-translate-version | Install                            |
| ------- | --------------------- | ---------------------------------- |
| 17      | 2.x                   | `yarn add ngx-translate-version`   |
| 16      | 1.x                   | `yarn add ngx-translate-version@1` |
| 15      | 0.x                   | `yarn add ngx-translate-version@0` |

## Peer Dependencies

```
  "@angular/common": ">=17",
  "@angular/core": ">=17",
  "@gilsdav/ngx-translate-router-http-loader": ">=2",
  "@gilsdav/ngx-translate-router": ">=7",
  "@ngx-translate/core": ">=15",
  "@ngx-translate/http-loader": ">=8"
```

## License

Copyright &copy; 2023 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
