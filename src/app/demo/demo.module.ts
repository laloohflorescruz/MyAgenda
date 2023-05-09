import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { DemoRoutingModule } from './demo-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DemoRoutingModule  
  ]
})
export class DemoModule { }
