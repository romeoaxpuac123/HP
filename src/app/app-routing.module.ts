import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {RegistroComponent} from './components/registro/registro.component';
import {PortalComponent} from './components/portal/portal.component';
import {MenuComponent} from './components/menu/menu.component'
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
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


