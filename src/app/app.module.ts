import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';

import {FormsModule} from '@angular/forms';
import { PortalComponent } from './components/portal/portal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PesentacionComponent } from './components/pesentacion/pesentacion.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { Encabezado1Component } from './components/encabezado1/encabezado1.component';
import { MenuComponent } from './components/menu/menu.component';
import { Encabezado2Component } from './components/encabezado2/encabezado2.component';
import { AlertasComponent } from './components/alertas/alertas.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    PortalComponent,
    NavbarComponent,
    PesentacionComponent,
    CopyrightComponent,
    Encabezado1Component,
    MenuComponent,
    Encabezado2Component,
    AlertasComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
