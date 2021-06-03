import { Routes } from '@angular/router';

import { GestionmedicalComponent } from './gestionmedical.component';

export const GestionmedicalRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: GestionmedicalComponent
    }]
}
];