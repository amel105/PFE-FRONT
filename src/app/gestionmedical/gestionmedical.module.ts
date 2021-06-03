import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { GestionmedicalComponent } from './gestionmedical.component';
import { GestionmedicalRoutes} from './gestionmedical.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GestionmedicalRoutes),
        FormsModule
    ],
    declarations: [GestionmedicalComponent]
})

export class GestionmedicalModule {}
