import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { PubsangComponent } from './pubsang.component';
import { PubsangRoutes } from './pubsang.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PubsangRoutes),
        FormsModule
    ],
    declarations: [PubsangComponent]
})

export class PubsangModule {}
