import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { WizardComponent } from '../forms/wizard/wizard.component';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { ProfileComponent } from './profile/profile.component';
import { DonationsangComponent } from './donationsang/donationsang.component';
import { DonatesangComponent } from './donatesang/donatesang.component';
import { DonatemedicalComponent } from './donatemedical/donatemedical.component';
import { DonateescorComponent } from './donateescor/donateescor.component';
import { AlerteComponent } from './alerte/alerte.component';
import { ReclamsangComponent } from './reclamsang/reclamsang.component';
import { ReclammedicalComponent } from './reclammedical/reclammedical.component';
import { ReclamescorComponent } from './reclamescor/reclamescor.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        MaterialModule
    ],
    declarations: [DashboardComponent,ProfileComponent, EditProfileComponent,WizardComponent, DonationsangComponent, DonatesangComponent, DonatemedicalComponent, DonateescorComponent, AlerteComponent, ReclamsangComponent, ReclammedicalComponent, ReclamescorComponent]
})

export class DashboardModule {}
