import { Routes } from '@angular/router';

import { GestioncompteComponent } from './gestioncompte.component';

export const GestioncompteRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: GestioncompteComponent
    }]
}
];