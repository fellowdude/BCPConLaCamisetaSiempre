import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmergencyBackpackComponent } from './emergency-backpack.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EmergencyBackpackComponent
  }
]

@NgModule({
  declarations: [
    EmergencyBackpackComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class EmergencyBackpackModule { }
