import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [

  {
    path: 'principal',
    component: PrincipalComponent,
  },

  {
    path: 'splash',
    component: SplashComponent,
  },

  {
    path: '**',
    redirectTo: 'principal',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
