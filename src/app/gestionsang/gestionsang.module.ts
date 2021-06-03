import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { GestionsangComponent } from './gestionsang.component';
import { GestionsangRoutes} from './gestionsang.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GestionsangRoutes),
        FormsModule
    ],
    declarations: [GestionsangComponent]
})

export class GestionsangModule {}
