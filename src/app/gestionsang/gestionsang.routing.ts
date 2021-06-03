import { Routes } from '@angular/router';

import { GestionsangComponent } from './gestionsang.component';

export const GestionsangRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: GestionsangComponent
    }]
}
];