import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
//import { WizardComponent } from '../forms/wizard/wizard.component';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { ProfileComponent } from './profile/profile.component';

import { AlerteComponent } from './alerte/alerte.component';



/*
import { ExtendedFormsComponent } from '../forms/extendedforms/extendedforms.component';
import { RegularFormsComponent } from '../forms/regularforms/regularforms.component';
import { ValidationFormsComponent } from '../forms/validationforms/validationforms.component';
//import { WizardComponent } from '../forms/wizard/wizard.component';
import { FieldErrorDisplayComponent } from '../forms/validationforms/field-error-display/field-error-display.component';*/


@NgModule({
    imports: [
        CommonModule,
        /*ExtendedFormsComponent,
        RegularFormsComponent,
        ValidationFormsComponent,
        FieldErrorDisplayComponent,*/
        RouterModule.forChild(DashboardRoutes),
        
        MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        MaterialModule
    ],
    declarations: [DashboardComponent,ProfileComponent, 
        EditProfileComponent, AlerteComponent ]
})

export class DashboardModule {}
