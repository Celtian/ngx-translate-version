import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
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
