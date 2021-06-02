import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { GestioncompteComponent } from './gestioncompte.component';
import { GestioncompteRoutes } from './gestioncompte.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GestioncompteRoutes),
        FormsModule
    ],
    declarations: [GestioncompteComponent]
})

export class GestioncompteModule {}
