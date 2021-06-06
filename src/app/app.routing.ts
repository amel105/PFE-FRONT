import { RouterModule, Routes } from '@angular/router';
import { AccueilbenevoleComponent } from './dashboard/accueilbenevole/accueilbenevole.component';
import { AccueilbenificeurComponent } from './dashboard/accueilbenificeur/accueilbenificeur.component';
import { DonatemedicalComponent } from './dashboard/donatemedical/donatemedical.component';
import { DonatesangComponent } from './dashboard/donatesang/donatesang.component';
import { DonationsangComponent } from './dashboard/donationsang/donationsang.component';
import { DonateescorComponent } from './dashboard/donateescor/donateescor.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BenefeceurGuardService } from './services/benefeceur-guard.service';
import { BenevolGuardService } from './services/benevol-guard.service';
import { LogoutGuardService } from './services/logout-guard.service';
//import { LogoutGuardService } from './services/logout-guard.service.ts';
//import { BenevolGuardService } from './services/benevol-guard.service.ts';
//import { BenefeceurGuardService } from './services/benefeceur-guard.service.ts';
//import {Log}

export const AppRoutes: Routes = [
  {
    path: 'accueilbenevole',
      canActivate:[BenevolGuardService],
    
    component: AccueilbenevoleComponent,
  },
  {
    path: 'donateescorte',
    
    
    component: DonateescorComponent,
  },
  {
    path: 'donatemedical',
    
    
    component: DonatemedicalComponent,
  },
  {
    path: 'donatesang',
    
    component: DonatesangComponent,
  },
  {
    path: 'accueilbeneficeur',
          canActivate:[BenefeceurGuardService],

    component: AccueilbenificeurComponent,
  },
 {
    path: 'donationsang',
    component: DonationsangComponent,
  },
 

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }, {
      path: '',
      canActivate:[AuthGuardService],
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
    },
    {
        path: 'gestionmedical',
        loadChildren: './gestionmedical/gestionmedical.module#GestionmedicalModule'
    }, {
        path: 'gestionescorte',
        loadChildren: './gestionescorte/gestionescorte.module#GestionescorteModule'
    },
    {
        path: 'gestionsang',
        loadChildren: './gestionsang/gestionsang.module#GestionsangModule'
    },{
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
    },
    {
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    }, {
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
    }
  ]},
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate:[LogoutGuardService],
    children: [{
      path: 'pages',
      loadChildren: './pages/pages.module#PagesModule'
    }]
  }
];

     
     
  



