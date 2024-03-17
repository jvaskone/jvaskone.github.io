import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-excel-world-population',
  standalone: true,
  imports: [],
  templateUrl: './excel-world-population.component.html',
  styleUrl: './excel-world-population.component.scss'
})
export class ExcelWorldPopulationComponent {
  constructor(
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }  
}
