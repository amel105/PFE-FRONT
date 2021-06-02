import { Routes } from '@angular/router';

import { PubsangComponent } from './pubsang.component';

export const PubsangRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: PubsangComponent
    }]
}
];