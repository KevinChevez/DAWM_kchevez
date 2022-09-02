import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginTextoComponent } from './components/login-texto/login-texto.component';
import { InicioViewComponent } from './components/inicio-view/inicio-view.component';
import { OrdenesViewComponent } from './components/ordenes-view/ordenes-view.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilViewComponent } from './components/perfil-view/perfil-view.component';

// Librerias de angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

// API HTTP para acceder a servicios del back-end
import { HttpClientModule } from '@angular/common/http';

// Imports para uso de Firebase en login
import { provideAuth, getAuth, AuthModule } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { RegisterComponent } from './components/register/register.component';
import { InfoViewComponent } from './components/info-view/info-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginTextoComponent,
    InicioViewComponent,
    OrdenesViewComponent,
    LoginViewComponent,
    NavbarComponent,
    PerfilViewComponent,
    RegisterComponent,
    InfoViewComponent,
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
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
    MatFormFieldModule,
    ReactiveFormsModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
