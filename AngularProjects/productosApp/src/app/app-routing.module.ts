import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  { path: "lista", component: ListaComponent },
  { path: "producto/:id", component: ProductoComponent},
  { path: "**", redirectTo: "lista" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
