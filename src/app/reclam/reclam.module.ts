import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { AccueilbenificeurComponent } from './accueilbenificeur/accueilbenificeur.component';
import { ReclamRoutes } from './reclam.routing';
import { ReclamescorComponent } from './reclamescor/reclamescor.component';
import { ReclammedicalComponent } from './reclammedical/reclammedical.component';
import { ReclamsangComponent } from './reclamsang/reclamsang.component';

@NgModule({
  declarations: [ReclamescorComponent,ReclammedicalComponent,ReclamsangComponent,AccueilbenificeurComponent],
  imports: [
    CommonModule,
        /*ExtendedFormsComponent,
        RegularFormsComponent,
        ValidationFormsComponent,
        FieldErrorDisplayComponent,*/
        RouterModule.forChild(ReclamRoutes),
        
        MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
  ]
})
export class ReclamModule { }

