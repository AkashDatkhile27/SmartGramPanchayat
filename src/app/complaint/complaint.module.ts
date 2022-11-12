import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintboxComponent } from './complaintbox/complaintbox.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComplaintboxComponent
  ],
  imports: [
    CommonModule,
  FormsModule
  ],
  exports:[
    ComplaintboxComponent
  ]
})
export class ComplaintModule { }
