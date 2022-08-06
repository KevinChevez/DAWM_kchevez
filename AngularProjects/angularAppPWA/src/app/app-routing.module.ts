import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { PrincipalComponent } from './principal/principal.component';
import { AlbumComponent } from './album/album.component';


const routes: Routes = [
  {path:"splash", component:SplashComponent},
  {path:"principal", component:PrincipalComponent},
  {path:"album", component:AlbumComponent},
  {path:"**", redirectTo:"splash"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
