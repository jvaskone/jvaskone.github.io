import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-braincad',
  standalone: true,
  imports: [],
  templateUrl: './braincad.component.html',
  styleUrl: './braincad.component.scss'
})
export class BraincadComponent {

  constructor(
    private location: Location
  ) {

  }
  goBack(): void {
    this.location.back();
  }
}
