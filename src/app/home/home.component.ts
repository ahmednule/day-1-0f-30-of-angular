import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
<section class="first-section">
  <form>
    <input type="text" placeholder="Filter by City"/>
    <button>Search</button>
  </form>
</section>
<section class="second-section">
  <app-housing-location></app-housing-location>
</section>
  `,
  styleUrls: ['./home.component.css',]
})
export class HomeComponent {

}
