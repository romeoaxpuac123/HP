import { Component, OnInit } from '@angular/core';
import {AlertasComponent} from '../alertas/alertas.component';
@Component({
  selector: 'app-hematologia',
  templateUrl: './hematologia.component.html',
  styleUrls: ['./hematologia.component.css']
})
export class HematologiaComponent implements OnInit {
  public Alamars:AlertasComponent = new AlertasComponent;
  public Pagina:number = 1;
  public Hematologias:any = [];
  public TipoHemalogias:any = [];
  constructor() {
    this.Hematologias = [
      {
        "Nombre": "Glucosa1",
        "Cantidad": "Cantidad1",
        "Unidad": "Unidad1",
        "Fecha": "12/12/2021"
      },
      {
        "Nombre": "Glucosa2",
        "Cantidad": "Cantidad2",
        "Unidad": "Unidad2",
        "Fecha": "12/12/2022"
      },
      {
        "Nombre": "Glucosa3",
        "Cantidad": "Cantidad3",
        "Unidad": "Unidad3",
        "Fecha": "12/12/2023"
      },
      {
        "Nombre": "Glucosa4",
        "Cantidad": "Cantidad4",
        "Unidad": "Unidad4",
        "Fecha": "12/12/2024"
      },
      {
        "Nombre": "Glucosa5",
        "Cantidad": "Cantidad5",
        "Unidad": "Unidad5",
        "Fecha": "12/12/2025"
      },
      {
        "Nombre": "Glucosa6",
        "Cantidad": "Cantidad6",
        "Unidad": "Unidad6",
        "Fecha": "12/12/2026"
      },
      {
        "Nombre": "Glucosa7",
        "Cantidad": "Cantidad7",
        "Unidad": "Unidad7",
        "Fecha": "12/12/2027"
      },
      {
        "Nombre": "Glucosa8",
        "Cantidad": "Cantidad8",
        "Unidad": "Unidad8",
        "Fecha": "12/12/2028"
      },
      {
        "Nombre": "Glucosa9",
        "Cantidad": "Cantidad9",
        "Unidad": "Unidad9",
        "Fecha": "12/12/2029"
      },
      {
        "Nombre": "Glucosa10",
        "Cantidad": "Cantidad10",
        "Unidad": "Unidad10",
        "Fecha": "12/12/20210"
      },
      {
        "Nombre": "Glucosa11",
        "Cantidad": "Cantidad11",
        "Unidad": "Unidad11",
        "Fecha": "12/12/20211"
      },
    ];
    this.TipoHemalogias = [
      {
       "Nombre": "Glucosa"
      },
      {
        "Nombre": "Colesterol"
      }
    ];
   }

  ngOnInit(): void {
  }

  mensajeCorto(texto:string):string{
    if(texto.length>20){
      let salida:string = "";
      for(let i = 0; i < 20; i++){
        salida = salida + texto[i]; 
      }
      return salida;
    }
    return texto;
  }
  mensajeCorto2(texto:string):string{
    if(texto.length>20){
      let salida:string = "";
      for(let i = 0; i < 20; i++){
        salida = salida + texto[i]; 
      }
      return salida;
    }
    return texto;
  }
  mostrarMensaje(Nombre:string,Cantidad:string,Unidad:string,Fecha:string){
    this.Alamars.Mensaje_Hematologia(Nombre,Cantidad+" "+ Unidad,Fecha);
  }
  aumentarPagina(){
    let Anterior: any = document.getElementById('Anterior');
    let Siguiente: any = document.getElementById('Siguiente');
    Anterior.disabled = false;
    this.Pagina +=1;
    if(this.Pagina==1){
      Anterior.disabled = true;
    }
    if(this.Hematologias.length <= 5){
      this.Pagina=1;
      Siguiente.disabled = true;
    }
    if(this.Pagina*5>=this.Hematologias.length){
      Siguiente.disabled = true;
    }else{
      Siguiente.disabled = false;
    }
    
  }
  disminuirPagina(){
    let Anterior: any = document.getElementById('Anterior');
    let Siguiente: any = document.getElementById('Siguiente');
    if(this.Pagina==1){
      Anterior.disabled = true;
    }else{
      this.Pagina -=1;
      Siguiente.disabled = false;
    }
    
  }
  EnviarHematologia(){
    this.Alamars.Formulario_Hematologia();
  }


}
