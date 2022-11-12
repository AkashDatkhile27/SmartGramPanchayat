import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemelistComponent } from './schemelist/schemelist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { ButtonsModule, CardsModule, CheckboxModule, IconsModule, InputsModule, WavesModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { ComplaintlistComponent } from './complaintlist/complaintlist.component';
import { AdminnavComponent } from './adminnav/adminnav.component';



@NgModule({
  declarations: [
    SchemelistComponent,
    AdminloginComponent,
    ComplaintlistComponent,
    AdminnavComponent
  ],
  imports: [
    CommonModule, MatAutocompleteModule,MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatRadioModule,
    MatGridListModule,
    MdbAccordionModule,
    CheckboxModule,
    WavesModule, 
    ButtonsModule,
    InputsModule, 
    IconsModule, 
    CardsModule, 
    FormsModule, 
  ],
  exports:[
    SchemelistComponent,
    AdminloginComponent,
  ComplaintlistComponent,
AdminnavComponent]
})
export class DashboardModule { }
