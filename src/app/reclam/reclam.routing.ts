import { Routes } from '@angular/router';

import { AccueilbenificeurComponent } from './accueilbenificeur/accueilbenificeur.component';
import { AlerteComponent } from './alerte/alerte.component';
import { ReclamationescorteComponent } from './reclamationescorte/reclamationescorte.component';
import { ReclamationmedicalComponent } from './reclamationmedical/reclamationmedical.component';
import { ReclamationsangComponent } from './reclamationsang/reclamationsang.component';
import { ReclamescorComponent } from './reclamescor/reclamescor.component';
import { ReclammedicalComponent } from './reclammedical/reclammedical.component';
import { ReclamsangComponent } from './reclamsang/reclamsang.component';

export const ReclamRoutes: Routes = [
    

  {
    path: '',
    children: [
       {
    
    
      path:'acceuilbenificeur',
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
      },
      {
        path:'reclamationMedical',
        component:ReclamationmedicalComponent
      },
      {
        path:'reclamationSang',
        component:ReclamationsangComponent
      },
      {
        path:'reclamationEscorte',
        component:ReclamationescorteComponent
      },
      {
        path:'alerte',
        component:AlerteComponent
      }
     
    
    ]
    }

];
