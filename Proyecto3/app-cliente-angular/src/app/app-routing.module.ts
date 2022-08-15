import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginViewComponent } from './login-view/login-view.component';
import { InicioViewComponent } from './inicio-view/inicio-view.component';
import { OrdenesViewComponent } from './ordenes-view/ordenes-view.component';
import { PerfilViewComponent } from './perfil-view/perfil-view.component';


const routes: Routes = [
  {path:"login-view", component: LoginViewComponent},
  {path:"inicio-view", component: InicioViewComponent},
  {path:"ordenes-view", component: OrdenesViewComponent},
  {path:"perfil-view", component: PerfilViewComponent},
  {path:"**", redirectTo:"login-view"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
