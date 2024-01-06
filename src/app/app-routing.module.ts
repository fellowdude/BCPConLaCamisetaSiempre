import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'como-afrontar',
    loadChildren: () => import('./pages/confront/confront.module').then((m) => m.ConfrontModule),
  },
  {
    path: 'aprende-mas',
    loadChildren: () => import('./pages/learn-more/learn-more.module').then((m) => m.LearnMoreModule),
  },
  {
    path: 'mochila-de-emergencia',
    loadChildren: () => import('./pages/emergency-backpack/emergency-backpack.module').then((m) => m.EmergencyBackpackModule),
  },
  {
    path: 'zonas-afectadas',
    loadChildren: () => import('./pages/afected-zones/afected-zones.module').then((m) => m.AfectedZonesModule),
  },
  {
    path: 'capacitaciones',
    loadChildren: () => import('./pages/training/training.module').then((m) => m.TrainingModule),
  },
  {
    path: 'medidas-a-tomar',
    loadChildren: () => import('./pages/emergency-cases/emergency-cases.module').then((m) => m.EmergencyCasesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
