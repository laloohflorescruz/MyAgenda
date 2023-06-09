import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes = [
  { path: 'contactmanager', loadChildren: ()=> import('./contactmanager/contactmanager.module').then(m =>m.ContactmanagerModule)},
  { path: 'demo', loadChildren: ()=> import('./demo/demo.module').then(m =>m.DemoModule)},
  { path: '**', redirectTo: 'contactmanager'}
 ]
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
