import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexboxComponent } from './flexbox/flexbox.component';

const routes: Routes = [
  { path: 'flexbox', component: FlexboxComponent },
  { path: '**', redirectTo: 'flexbox' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
