import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cookiebook',
  standalone: true,
  imports: [],
  templateUrl: './cookiebook.component.html',
  styleUrl: './cookiebook.component.scss'
})
export class CookiebookComponent {

  constructor(
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }  
}
