import { Routes } from '@angular/router';

import { GestionescorteComponent } from './gestionescorte.component';

export const GestionescorteRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: GestionescorteComponent
    }]
}]