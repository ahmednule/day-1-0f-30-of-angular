import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header>
      <img src="/assets/logo.svg" alt="This is the logo of the application"/>
      </header>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
