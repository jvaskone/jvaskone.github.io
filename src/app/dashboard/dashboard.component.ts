import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [AboutComponent, PortfolioComponent, ContactComponent]
})
export class DashboardComponent {

}
