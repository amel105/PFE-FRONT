import { Routes } from '@angular/router';

import { AccueilbenificeurComponent } from './accueilbenificeur/accueilbenificeur.component';
import { ReclamescorComponent } from './reclamescor/reclamescor.component';
import { ReclammedicalComponent } from './reclammedical/reclammedical.component';
import { ReclamsangComponent } from './reclamsang/reclamsang.component';

export const ReclamRoutes: Routes = [
    

 
    
    {
      path:'acceuilb',
      component:AccueilbenificeurComponent
    },
    {
        path:'reclamSang',
        component:ReclamsangComponent
      },
      {
        path:'reclamEscort',
        component:ReclamescorComponent
      },
      {
        path:'reclamMedical',
        component:ReclammedicalComponent
      }
    
   
  

];
