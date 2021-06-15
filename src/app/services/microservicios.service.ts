import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class MicroserviciosService {

  constructor(
    private _http:HttpClient, 
  ){ 

  }

  SesionCliente(correo:string,password:string){
    
    let urlAPI = 'http://localhost:3003/authCliente';
    return this._http.post(urlAPI,{
      "email": correo,
      "pass": password,

    });   
   
  }
  SesionMedico(correo:string,password:string){
    let urlAPI = 'http://localhost:3003/authMedico';
    return this._http.post(urlAPI,{
      "email": correo,
      "pass": password,

    })
  }

  RegistrarMedico(Nombre:string,Apellido:string,password:string, email:string,Chas:string){
    let urlAPI = 'http://localhost:3003/regisMedico';
    return this._http.post(urlAPI,{
      "Nombre": Nombre,
      "Apellido": Apellido,
      "password": password,
      "email": email,
      "Chas": Chas
    })
  }

  registrarCliente(Nombre:string,Apellido:string,password:string, email:string, genero:string, fecha:string,foto:string, Chas:string){
    let urlAPI = 'http://localhost:3003/regisCliente';
    return this._http.post(urlAPI,{
      "Nombre": Nombre,
      "Apellido": Apellido,
      "password": password,
      "email": email,
      "genero": genero,
      "FechaNac": fecha,
      "fotografia": foto,
      "Chas": Chas
    })
  }

  ActivarCuenta(correo:string,codigo:string,tipo:string){
    let urlAPI = 'http://localhost:3003/authCuenta';
    return this._http.post(urlAPI,{
      "email": correo,
      "codigo": codigo,
      "tipo":tipo
    })
  }

  CorreoCuenta(email:string,codigo:string,nombre:string,password:string){
    let urlAPI = 'http://localhost:3003/Correo';
    return this._http.post(urlAPI,{
      "email": email,
      "codigo": codigo,
      "nombre":nombre,
      "password":password,
    })
  }

  Contactanos(nombre:string,asunto:string,correo:string){
    let urlAPI = 'http://localhost:3003/Respuesta';
    return this._http.post(urlAPI,{
      "nombre": nombre,
      "asunto": asunto,
      "correo":correo,
    })
  }

  InfoContacanos(nombre:string,asunto:string,correo:string,mensaje:string){
    let urlAPI = 'http://localhost:3003/MensajeC';
    return this._http.post(urlAPI,{
      "nombre": nombre,
      "asunto": asunto,
      "correo":correo,
      "mensaje":mensaje
    })
  }

  ActualizarCliente(user:number,Nombre:string,Apellido:string,
    password:string,email:string,genero:string,FechaNac:string,fotografia:string){
    let urlAPI = 'http://localhost:3003/UpdateCliente';
    return this._http.post(urlAPI,{
      "user": user,
      "Nombre": Nombre,
      "Apellido":Apellido,
      "password":password,
      "email":email,
      "genero":genero,
      "FechaNac":FechaNac,
      "fotografia":fotografia

    })
  }

  ActualizarMedico(user:number,Nombre:string,Apellido:string,
    password:string,email:string){
    let urlAPI = 'http://localhost:3003/UpdateMedico';
    return this._http.post(urlAPI,{
      "User": user,
      "Nombre": Nombre,
      "Apellido":Apellido,
      "password":password,
      "email":email
    })
  }


}
