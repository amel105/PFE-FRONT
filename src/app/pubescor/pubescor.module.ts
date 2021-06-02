import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { PubescorComponent } from './pubescor.component';
import { PubescorRoutes } from './pubescor.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PubescorRoutes),
        FormsModule
    ],
    declarations: [PubescorComponent]
})

export class PubescorModule {}
