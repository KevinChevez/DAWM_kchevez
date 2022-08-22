import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginTextoComponent } from './login-texto/login-texto.component';
import { InicioViewComponent } from './inicio-view/inicio-view.component';
import { OrdenesViewComponent } from './ordenes-view/ordenes-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Librerias de angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilViewComponent } from './perfil-view/perfil-view.component';

// API HTTP para acceder a servicios del back-end
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginTextoComponent,
    InicioViewComponent,
    OrdenesViewComponent,
    LoginViewComponent,
    NavbarComponent,
    PerfilViewComponent,
  ],
  imports: [
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
