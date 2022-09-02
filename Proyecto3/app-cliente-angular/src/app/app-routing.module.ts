import { InfoViewComponent } from './components/info-view/info-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginViewComponent } from './components/login-view/login-view.component';
import { InicioViewComponent } from './components/inicio-view/inicio-view.component';
import { OrdenesViewComponent } from './components/ordenes-view/ordenes-view.component';
import { PerfilViewComponent } from './components/perfil-view/perfil-view.component';
import { RegisterComponent } from './components/register/register.component';

// Helper de firebase para bloquear acceso a usuarios no registrados en mi app
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

const routes: Routes = [
  {path:'', redirectTo:"/inicio", pathMatch:"full"},
  {path:"login", component: LoginViewComponent},
  {path:"register", component: RegisterComponent},
  {path:"inicio", component: InicioViewComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:"ordenes", component: OrdenesViewComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:"perfil", component: PerfilViewComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:"info", component: InfoViewComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:"ordenes/:categoria", component: OrdenesViewComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:"ordenes/:categoria/:id", component: OrdenesViewComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:"**", redirectTo:"login"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
