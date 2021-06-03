import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { GestionescorteComponent } from './gestionescorte.component';
import { GestionescorteRoutes} from './gestionescorte.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GestionescorteRoutes),
        FormsModule
    ],
    declarations: [GestionescorteComponent]
})

export class GestionescorteModule {}
