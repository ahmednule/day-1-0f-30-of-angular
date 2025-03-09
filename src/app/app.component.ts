import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header>
      <img src="/assets/logo.svg" alt="This is the logo of the application"/>
      </header>
      <section>
        <app-home></app-home>
      </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'homes';
}
