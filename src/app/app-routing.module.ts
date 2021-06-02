import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {RegistroComponent} from './components/registro/registro.component';
import {PortalComponent} from './components/portal/portal.component';
import {MenuComponent} from './components/menu/menu.component'
import {PerfilComponent} from './components/perfil/perfil.component'
import {MensajesComponent} from './components/mensajes/mensajes.component'
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
    path:'Menu',
    component: MenuComponent 
  },
  {
    path:'Mensaje',
    component: MensajesComponent 
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


