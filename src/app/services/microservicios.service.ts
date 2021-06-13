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

}
