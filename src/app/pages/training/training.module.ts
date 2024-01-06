import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DoneInformationComponent } from './done-information/done-information.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent
  }
]

@NgModule({
  declarations: [
    TrainingComponent,
    DoneInformationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TrainingModule { }
