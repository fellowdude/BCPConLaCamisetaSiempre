import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfectedZonesComponent } from './afected-zones.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AfectedZonesComponent
  }
]

@NgModule({
  declarations: [
    AfectedZonesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AfectedZonesModule { }
