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
  //Servicios para ficha medica
  ObtenerFicha(user:number){
    let urlAPI = 'http://localhost:3003/ExisteFicha';
    return this._http.post(urlAPI,{
      "External_ID_Cliente": user
    })
  }
  RegistrarFicha(External_ID_Cliente:number,Estatura:number,
    Ultimo_Control:string,Peso:number,Grupo_Sanguineo:string,
    Medicamente1:string,Medicamente2:string,Medicamente3:string,
    Medicamente4:string,Medicamente5:string,Intolerancia1:string,
    Intolerancia2:string,Intolerancia3:string,Cirujias:number,
    Enfermedad1:string,Enfermedad2:string,Enfermedad3:string
    ){
    let urlAPI = 'http://localhost:3003/regisFicha';
    return this._http.post(urlAPI,{
      "External_ID_Cliente": External_ID_Cliente,
      "Estatura":Estatura,
      "Ultimo_Control":Ultimo_Control,
      "Peso":Peso,
      "Grupo_Sanguineo":Grupo_Sanguineo,
      "Medicamente1":Medicamente1,
      "Medicamente2":Medicamente2,
      "Medicamente3":Medicamente3,
      "Medicamente4":Medicamente4,
      "Medicamente5":Medicamente5,
      "Intolerancia1":Intolerancia1,
      "Intolerancia2":Intolerancia2,
      "Intolerancia3":Intolerancia3,
      "Cirujias":Cirujias,
      "Enfermedad1":Enfermedad1,
      "Enfermedad2":Enfermedad2,
      "Enfermedad3":Enfermedad3
    })
  }

  ActualizarFicha(External_ID_Ficha:number,External_ID_Cliente:number,Estatura:number,
    Ultimo_Control:string,Peso:number,Grupo_Sanguineo:string,
    Medicamente1:string,Medicamente2:string,Medicamente3:string,
    Medicamente4:string,Medicamente5:string,Intolerancia1:string,
    Intolerancia2:string,Intolerancia3:string,Cirujias:number,
    Enfermedad1:string,Enfermedad2:string,Enfermedad3:string
    ){
    let urlAPI = 'http://localhost:3003/UpdateFicha';
    return this._http.post(urlAPI,{
      "External_ID_Ficha":External_ID_Ficha,
      "External_ID_Cliente": External_ID_Cliente,
      "Estatura":Estatura,
      "Ultimo_Control":Ultimo_Control,
      "Peso":Peso,
      "Grupo_Sanguineo":Grupo_Sanguineo,
      "Medicamente1":Medicamente1,
      "Medicamente2":Medicamente2,
      "Medicamente3":Medicamente3,
      "Medicamente4":Medicamente4,
      "Medicamente5":Medicamente5,
      "Intolerancia1":Intolerancia1,
      "Intolerancia2":Intolerancia2,
      "Intolerancia3":Intolerancia3,
      "Cirujias":Cirujias,
      "Enfermedad1":Enfermedad1,
      "Enfermedad2":Enfermedad2,
      "Enfermedad3":Enfermedad3
    })
  }

  ExisteMedico(email:string){
    let urlAPI = 'http://localhost:6003/CorreoMedico';
    return this._http.post(urlAPI,{
      "email": email
    })
  }
  ExisteCliente(email:string){
    let urlAPI = 'http://localhost:6003/CorreoCliente';
    return this._http.post(urlAPI,{
      "email": email
    })
  }
  ExisteAsignacionMedica(External_ID_Cliente:number,External_ID_Medico:number){
    let urlAPI = 'http://localhost:6003/ExisteAsignacionMedica';
    return this._http.post(urlAPI,{
      "External_ID_Cliente": External_ID_Cliente,
      "External_ID_Medico":External_ID_Medico
    })
  }
  AsignacionMedica(External_ID_Cliente:number,External_ID_Medico:number){
    let urlAPI = 'http://localhost:6003/AsignacionMedica';
    return this._http.post(urlAPI,{
      "External_ID_Cliente": External_ID_Cliente,
      "External_ID_Medico":External_ID_Medico
    })
  }
  GuardarMensaje(Internal_ID_Asignacion:number,Mensaje:string,Emisor:string,EmailEmisor:string,EmailReceptor:string,Asunto:string){
    let urlAPI = 'http://localhost:6003/AgregarMensaje';
    return this._http.post(urlAPI,{
      "Internal_ID_Asignacion": Internal_ID_Asignacion,
      "Mensaje":Mensaje,
      "Emisor":Emisor,
      "EmailEmisor": EmailEmisor,
      "EmailReceptor":EmailReceptor,
      "Asunto":Asunto

    })
  }
  Mensajes(Email:string){
    let urlAPI = 'http://localhost:6003/MostrarMensajes';
    return this._http.post(urlAPI,{
      "Email": Email
    })
  }


}
