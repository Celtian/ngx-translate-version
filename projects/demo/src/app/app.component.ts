import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { VERSION } from '../environments/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LocalizeRouterModule]
})
export class AppComponent {
  public title = 'ngx-translate-version';
  public version = VERSION;
}
