import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { AccueilComponent } from './accueil.component';
import { AccueilRoutes } from './accueil.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AccueilRoutes),
        FormsModule
    ],
    declarations: [AccueilComponent]
})

export class AccueilModule {}
