import { Routes } from '@angular/router';

import { PubescorComponent } from './pubescor.component';

export const PubescorRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: PubescorComponent
    }]
}
];