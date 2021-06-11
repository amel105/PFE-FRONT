import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsangComponent } from './donationsang/donationsang.component';
import { DonatesangComponent } from './donatesang/donatesang.component';
import { DonatemedicalComponent } from './donatemedical/donatemedical.component';
import { DonateescorComponent } from './donateescor/donateescor.component';
import { DonatedRoutes } from './donate.routing';
import { RouterModule } from '@angular/router';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { AccueilbenevoleComponent } from './accueilbenevole/accueilbenevole.component';
import { DonationmedicalComponent } from './donationmedical/donationmedical.component';
import { DonationescorteComponent } from './donationescorte/donationescorte.component';
import { AlerteComponent } from './alerte/alerte.component';

@NgModule({
  declarations: [DonationsangComponent, 
    DonatesangComponent, DonatemedicalComponent, DonateescorComponent,AccueilbenevoleComponent, DonationmedicalComponent, DonationescorteComponent, AlerteComponent],
  imports: [
    CommonModule,
        /*ExtendedFormsComponent,
        RegularFormsComponent,
        ValidationFormsComponent,
        FieldErrorDisplayComponent,*/
        RouterModule.forChild(DonatedRoutes),
        
        MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
  ]
})
export class DonateModule { }
