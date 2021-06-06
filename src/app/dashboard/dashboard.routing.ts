import { Routes } from '@angular/router';
import { ProfileComponent } from '../dashboard/profile/profile.component';
import { WizardComponent } from '../forms/wizard/wizard.component';
import { DonationsangComponent } from '../dashboard/donationsang/donationsang.component';
import { DashboardComponent } from './dashboard.component';


export const DashboardRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
      path:'dashboard/profile',
      component:ProfileComponent
    }
    ,
    {
      path:'dashboard/edit',
      component:WizardComponent
    } ,{
      path:'dashboard/donationsang',
      component:DonationsangComponent
    } 
    
  ]
}
];
