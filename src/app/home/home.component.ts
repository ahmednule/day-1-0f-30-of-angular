import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="first-section">
  <form>
    <input type="text" placeholder="Filter by City"/>
    <button>Search</button>
  </form>
</section>
<section class="second-section">
</section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
