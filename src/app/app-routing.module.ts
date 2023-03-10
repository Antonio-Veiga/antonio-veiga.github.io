import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  {
    path: '_world',
    component: WorldComponent
  },
  {
    path: '**',
    redirectTo: '_world',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
