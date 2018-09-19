import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendientesPage } from './pendientes';

@NgModule({
  declarations: [
    PendientesPage,
  ],
  imports: [
    IonicPageModule.forChild(PendientesPage),
  ],
})
export class PendientesPageModule {}
