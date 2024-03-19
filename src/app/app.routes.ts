import { Routes } from '@angular/router';
import { BraincadComponent } from './portfolio/braincad/braincad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarvinspaceComponent } from './portfolio/marvinspace/marvinspace.component';
import { CookiebookComponent } from './portfolio/cookiebook/cookiebook.component';
import { ExcelBikeSalesComponent } from './portfolio/excel-bike-sales/excel-bike-sales.component';
import { ExcelWorldPopulationComponent } from './portfolio/excel-world-population/excel-world-population.component';
import { PowerQueryComponent } from './portfolio/power-query/power-query.component';

export const routes: Routes = [    
    { path: '', component: DashboardComponent },
    { path: 'braincad', component: BraincadComponent },
    { path: 'marvinspace', component: MarvinspaceComponent },  
    { path: 'cookiebook', component: CookiebookComponent },  
    { path: 'excel', component: ExcelBikeSalesComponent },   
    { path: 'excel2', component: ExcelWorldPopulationComponent }, 
    { path: 'power_query', component: PowerQueryComponent },   
];
