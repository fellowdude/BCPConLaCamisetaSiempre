import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfrontComponent } from './confront.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PreparationsComponent } from './preparations/preparations.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ConfrontComponent
  }
]

@NgModule({
  declarations: [
    ConfrontComponent,
    PreparationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ConfrontModule { }
