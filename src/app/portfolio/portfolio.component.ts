import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  goToItems() {
    this.router.navigate(['items'], { relativeTo: this.route });
  }
}
