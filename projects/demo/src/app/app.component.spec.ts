import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideTranslateVersion } from 'projects/ngx-translate-version/src/public-api';
import { VERSION } from '../environments/version';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter(routes, withViewTransitions()),
        provideTranslateVersion(routes, {
          defaultLanguage: 'en',
          version: VERSION.TAG,
          pathLocales: 'assets/locales.json',
          pathI18n: (lang) => `assets/i18n/${lang}.json`
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should get github link`, waitForAsync(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.github-logo').href).toContain('https://github.com/celtian/ngx-translate-version');
  }));
});
