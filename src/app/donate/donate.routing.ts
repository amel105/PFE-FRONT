import { Routes } from '@angular/router';
import { DonatesangComponent } from './donatesang/donatesang.component';
import { DonatemedicalComponent } from './donatemedical/donatemedical.component';
import { DonationsangComponent } from './donationsang/donationsang.component';
import { AccueilbenevoleComponent } from './accueilbenevole/accueilbenevole.component';
import { DonationescorteComponent } from './donationescorte/donationescorte.component';
import { DonationmedicalComponent } from './donationmedical/donationmedical.component';
import { DonateescorComponent } from './donateescor/donateescor.component';
import { AlerteComponent } from './alerte/alerte.component';
import { ModifsangComponent } from './modifsang/modifsang.component';
import { ModifEscorteComponent } from './modifescorte/modif-escorte.component';
import { ModifMedicalComponent } from './modifmedical/modif-medical.component';

export const DonatedRoutes: Routes = [

  

  {
    path: '',
    children: [ {
    
        path: 'donatesang',
        component: DonatesangComponent
    },
    {
      path: 'donateescorte',
      component: DonateescorComponent
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
    },
    
    {
      path:'donationescorte',
      component:DonationescorteComponent
    },
    {
      path:'donationmedical',
      component:DonationmedicalComponent
    },
    {
      path:'alert',
      component:AlerteComponent
    },
    {
      path:'modifsang',
      component:ModifsangComponent
    },
    {
      path:'modifescorte',
      component:ModifEscorteComponent
    },
    {
      path:'modifmedical',
      component:ModifMedicalComponent
    }
   
    

  ]
}
];
