import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [],
  template: `
    <p>
      housinglocation works!
    </p>
  `,
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {
  @Input() housinglocation! : HousingLocation;

}
