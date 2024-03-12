import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-excel-bike-sales',
  standalone: true,
  imports: [],
  templateUrl: './excel-bike-sales.component.html',
  styleUrl: './excel-bike-sales.component.scss'
})
export class ExcelBikeSalesComponent {
  constructor(
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }  
}
