import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InteliturFaceComponent } from './components/intelitur-face/intelitur-face.component';
import { flush } from '@angular/core/testing';

//para el desarrollo del modulo de facebook redirecciono desde la raiz al modulo hasta tener acceso al repositorio
const routes: Routes = [
  {
    path:'',
    redirectTo: 'intelitur-facebook',
    pathMatch: 'full'

  },
  {
    path:'intelitur-facebook',
    component: InteliturFaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
