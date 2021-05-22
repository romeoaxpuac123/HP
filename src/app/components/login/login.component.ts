import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {AlertasComponent} from '../alertas/alertas.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}
export class LoginComponent implements OnInit {
  public Alamars:AlertasComponent = new AlertasComponent;
  public OnnSesion: boolean = false;

  constructor(
    private navegacion: Router,
  ) {
    this.OnnSesion = true;

  }

  ngOnInit(): void {
    if (this.OnnSesion == true) {
      this.Alamars.Mensaje_De_Error("Sesión abierta","Para ingresar con otra cuenta, cierre sesión");  
      this.navegacion.navigate(['']);
    }
  }

}
