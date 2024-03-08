import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-marvinspace',
  standalone: true,
  imports: [],
  templateUrl: './marvinspace.component.html',
  styleUrl: './marvinspace.component.scss'
})
export class MarvinspaceComponent {
  constructor(    
    private location: Location
  ) {

  }
  goBack(): void {
    this.location.back();
  }
}
