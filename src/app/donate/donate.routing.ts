import { Routes } from '@angular/router';
import { DonatesangComponent } from './donatesang/donatesang.component';
import { DonatemedicalComponent } from './donatemedical/donatemedical.component';
import { DonationsangComponent } from './donationsang/donationsang.component';
import { AccueilbenevoleComponent } from './accueilbenevole/accueilbenevole.component';

export const DonatedRoutes: Routes = [
    

 
    {
        path: 'sang/donate',
        component: DonatesangComponent
    },
    {
      path:'medical',
      component:DonatemedicalComponent
    },
    {
      path:'sang/donation',
      component:DonationsangComponent
    },
    {
      path:'acceuil',
      component:AccueilbenevoleComponent
    }
   
  

];
