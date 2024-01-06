import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnMoreComponent } from './learn-more.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PreventionComponent } from './prevention/prevention.component';

const routes: Routes = [
  {
    path: '',
    component: LearnMoreComponent
  }
]

@NgModule({
  declarations: [
    LearnMoreComponent,
    PreventionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class LearnMoreModule { }
