import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmergencyCasesComponent } from './emergency-cases.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EmergencyCasesComponent
  }
]

@NgModule({
  declarations: [
    EmergencyCasesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class EmergencyCasesModule { }
