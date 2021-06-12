import { Routes } from '@angular/router';
import { ProfileComponent } from '../dashboard/profile/profile.component';

import { DashboardComponent } from './dashboard.component';

import { ExtendedFormsComponent } from '../forms/extendedforms/extendedforms.component';
import { RegularFormsComponent } from '../forms/regularforms/regularforms.component';
import { ValidationFormsComponent } from '../forms/validationforms/validationforms.component';
import { WizardComponent } from '../forms/wizard/wizard.component';


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
      path:'/forms/wizard',
      component:WizardComponent
    } 
  ]
}
];
