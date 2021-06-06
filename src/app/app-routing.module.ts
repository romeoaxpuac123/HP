import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {RegistroComponent} from './components/registro/registro.component';
import {PortalComponent} from './components/portal/portal.component';
import {PerfilComponent} from './components/perfil/perfil.component';
import {MensajesComponent} from './components/mensajes/mensajes.component';
import {HematologiaComponent} from './components/hematologia/hematologia.component';
import {FichaComponent} from './components/ficha/ficha.component';
const routes: Routes = [
  {
    path:'',
    component: PortalComponent
  }, 
  {
    path:'Login',
    component: LoginComponent  
  },
  {
    path:'Home',
    component: HomeComponent  
  },
  {
    path:'Registro',
    component: RegistroComponent 
  },
  {
    path:'Perfil',
    component: PerfilComponent 
  },
  {
    path:'Mensaje',
    component: MensajesComponent 
  },
  {
    path:'Hematologia',
    component: HematologiaComponent 
  },
  {
    path:'Ficha',
    component: FichaComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


