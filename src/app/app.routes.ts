import { Routes } from '@angular/router';
import { BraincadComponent } from './portfolio/braincad/braincad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarvinspaceComponent } from './portfolio/marvinspace/marvinspace.component';

export const routes: Routes = [    
    { path: '', component: DashboardComponent },
    { path: 'braincad', component: BraincadComponent },
    { path: 'marvinspace', component: MarvinspaceComponent },    
];
