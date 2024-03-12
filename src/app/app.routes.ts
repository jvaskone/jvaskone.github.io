import { Routes } from '@angular/router';
import { BraincadComponent } from './portfolio/braincad/braincad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarvinspaceComponent } from './portfolio/marvinspace/marvinspace.component';
import { CookiebookComponent } from './portfolio/cookiebook/cookiebook.component';
import { ExcelBikeSalesComponent } from './portfolio/excel-bike-sales/excel-bike-sales.component';

export const routes: Routes = [    
    { path: '', component: DashboardComponent },
    { path: 'braincad', component: BraincadComponent },
    { path: 'marvinspace', component: MarvinspaceComponent },  
    { path: 'cookiebook', component: CookiebookComponent },  
    { path: 'excel', component: ExcelBikeSalesComponent },   
];
