import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-power-query',
  standalone: true,
  imports: [],
  templateUrl: './power-query.component.html',
  styleUrl: './power-query.component.scss'
})
export class PowerQueryComponent {
  constructor(
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }
}
