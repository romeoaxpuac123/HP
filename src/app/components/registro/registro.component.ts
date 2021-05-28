import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Route, Router } from '@angular/router';
import {AlertasComponent} from '../alertas/alertas.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public edited = false;
  public seguridad = false;
  public ValorContrasena:number = 0;
  public minusculas="abcdefghyjklmnñopqrstuvwxyz";
  public mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
  public numeros = "1234567890";
  public IgualPass = true;
  public Nivel:string = "Muy Bajo";
  PassWord = '';
  PassWord2 = '';
  public OnnSesion:boolean = false;
  public Alamars:AlertasComponent = new AlertasComponent;
  constructor(
    private navegacion: Router,
  ) { 
    this.OnnSesion = false;

  }

  ngOnInit(): void {
    if(this.OnnSesion==true){
      this.Alamars.Mensaje_De_Error("Sesión abierta","El registro de cuentas no esta disponible,\nPOR FAVOR CIERRE SESIÓN");  
      this.navegacion.navigate(['']);
    }
  }

  mostrar():void{
  
      this.edited = true;
  
  }

  Nomostrar():void{
  
    this.edited = false;

  }

  MostrarSeguridad():void{
    
   
    this.ValorContrasena = this.TieneMinusculas(this.PassWord) +  this.TieneMayusculas(this.PassWord) + this.Largo(this.PassWord) + this.TieneNumeros(this.PassWord);
    if(this.ValorContrasena == 25) {
      this.Nivel = "Muy Bajo";
    }else if(this.ValorContrasena == 50){
      this.Nivel = "Medio";
    }else if(this.ValorContrasena == 75){
      this.Nivel = "Alto";
    }else if(this.ValorContrasena == 100){
      this.Nivel = "Muy alto";
    }else{
      this.Nivel = "Muy Bajo"
    }
    this.seguridad = true;
  }

  MostrarIgualdad():void{
    
    if(this.PassWord == this.PassWord2){
      this.IgualPass = true;
      
    }else{
      this.IgualPass = false;
    }
  }


  TieneMinusculas(texto:string):number {

    for(let i=0; i<texto.length; i++){
      if (this.minusculas.indexOf(texto.charAt(i),0)!=-1){
         return 25;
      }
   }
    return 0;
  }
  TieneMayusculas(texto:string):number {

    for(let i=0; i<texto.length; i++){
      if (this.mayusculas.indexOf(texto.charAt(i),0)!=-1){
         return 25;
      }
   }
    return 0;
  }

  TieneNumeros(texto:string):number {

    for(let i=0; i<texto.length; i++){
      if (this.numeros.indexOf(texto.charAt(i),0)!=-1){
         return 25;
      }
   }
    return 0;
  }

  Largo(texto:string):number{
    if(texto.length > 7){
      return 25;
    }
    return 0;
  }

  cambiarTipo(){
    let tipo :any = document.getElementById('password');
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
  }

  Registrar(){

  }
}
