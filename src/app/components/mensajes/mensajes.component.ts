import { Component, OnInit } from '@angular/core';
import {AlertasComponent} from '../alertas/alertas.component';
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  public Alamars:AlertasComponent = new AlertasComponent;
  public Pagina:number = 1;
  public Mensajes:any = [];
  constructor() { 
    this.Mensajes = [
      {
        "Asunto": "Asunto1",
        "De": "De1",
        "Mensaje": "Mensaje1",
        "Fecha": "12/12/2020"
      },
      {
        "Asunto": "Asunto2",
        "De": "De2",
        "Mensaje": "Mensaje2",
        "Fecha": "12/12/2022"
      },
      {
        "Asunto": "Asunto3",
        "De": "De3",
        "Mensaje": "Mensaje3",
        "Fecha": "12/12/2023"
      },
      {
        "Asunto": "Asunto4",
        "De": "De4",
        "Mensaje": "Mensaje4",
        "Fecha": "12/12/2024"
      },
      {
        "Asunto": "Asunto5",
        "De": "De5",
        "Mensaje": "Mensaje5",
        "Fecha": "12/12/2025"
      },
      {
        "Asunto": "Asunto6",
        "De": "De6",
        "Mensaje": "Mensaje6",
        "Fecha": "12/12/2026"
      },
      {
        "Asunto": "Asunto7",
        "De": "De7",
        "Mensaje": "Mensaje7",
        "Fecha": "12/12/2027"
      },
      {
        "Asunto": "Asunto8",
        "De": "De8",
        "Mensaje": "Mensaje8",
        "Fecha": "12/12/2028"
      },
      {
        "Asunto": "Asunto9",
        "De": "De9",
        "Mensaje": "Mensaje9",
        "Fecha": "12/12/2029"
      },
      {
        "Asunto": "Asunto10",
        "De": "De10",
        "Mensaje": "Mensaje10",
        "Fecha": "12/12/20210"
      },
      {
        "Asunto": "Asunto11",
        "De": "De11",
        "Mensaje": "Mensaje11",
        "Fecha": "12/12/20211"
      },
    ]
  }

  ngOnInit(): void {
  }

  mensajeCorto(texto:string):string{
    if(texto.length>20){
      let salida:string = "";
      for(let i = 0; i < 20; i++){
        salida = salida + texto[i]; 
      }
      return salida + "...";
    }
    return texto + "...";
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
  mostrarMensaje(Emisor:string,Asunto:string,Fecha:string,mensaje:string){
    this.Alamars.Mensaje_Correo(Emisor,Asunto,Fecha,mensaje);
  }
  aumentarPagina(){
    let Anterior: any = document.getElementById('Anterior');
    let Siguiente: any = document.getElementById('Siguiente');
    Anterior.disabled = false;
    this.Pagina +=1;
    if(this.Pagina==1){
      Anterior.disabled = true;
    }
    if(this.Mensajes.length <= 5){
      this.Pagina=1;
      Siguiente.disabled = true;
    }
    if(this.Pagina*5>=this.Mensajes.length){
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
  EnviarMensaje(){
    this.Alamars. Cuadro_Mesaje();
  }
}
