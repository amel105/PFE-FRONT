import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LogoutGuardService } from './services/logout-guard.service.spec';

export const AppRoutes: Routes = [
  
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }, {
      path: '',
      canActivate:[AuthGuardService,],
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
    },
    {
        path: 'gestioncompte',
        loadChildren: './gestioncompte/gestioncompte.module#GestioncompteModule'
    }, {
        path: 'forms',
        loadChildren: './forms/forms.module#Forms'
    }, {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
    }, {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
    }, {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
    }, {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
    }, {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    }, 
    {
        path: 'pubescor',
        loadChildren: './pubescor/pubescor.module#PubescorModule'
    }, 
    {
        path: 'pubsang',
        loadChildren: './pubsang/pubsang.module#PubsangModule'
    },
    {
        path: 'accueil',
        loadChildren: './accueil/accueil.module#AccueilModule'
    },{
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    }, {
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
    }
  ]}, {
      path: '',
      canActivate:[LogoutGuardService],
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];



