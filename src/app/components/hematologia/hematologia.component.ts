import { Component, OnInit, ɵConsole } from '@angular/core';
import {AlertasComponent} from '../alertas/alertas.component';
import Swal from 'sweetalert2';
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
  //REGISTRAR HEMATOLOGIA
  public Cantidad: any;
  public Tipo: any;
  public Fecha: any;
  public Unidad: any;
  public minusculas = "abcdefghyjklmnñopqrstuvwxyz";
  public mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
  public simbolos = "¿@#$%&/()=?¡!*+-\\:;,|°\"\'^[]{}´"
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
    //this.Alamars.Formulario_Hematologia();
    this.Fecha = "Vacio";
    this.Unidad = "Vacio";
    this.Tipo = "Vacio";
    this.Cantidad = "Vacio";
    Swal.fire({
      background: '#5f6769',
      title: '<a style=\"color:white\">Registrar\nHematologia</a>',
      html:
        '<label  style = \'color:white; font-family:Verdana; font-size: 150%;\' for="Tipo">Tipo</label><br><br>' +
        '<select   required style = \'width: 50%; font-family:Verdana;  height: 40px;  \' name="Tipox" id="Tipox">' +
        '<option>HEMOGLOBINA GLICOSILADA</option>' +
        '<option>GLUCOSA PRE-PRANDRIAL</option>' +
        '<option>GLUCOSA POST-PRANDRIAL</option>' +
        '<option>CREATININA</option>' +
        '<option>COLESTEROL TOTAL</option>' +
        '<option>COLESTEROL HDL</option>' +
        '<option>COLESTEROL LDL</option>' +
        '<option>TRIGLICERIDOS</option>' +
        '<option>LIPIDOS TOTALES</option>' +
        '<option>ASAT-TGO</option>' +
        '<option>ALAT-TGP</option>' +
        '</select><br><br>' +


        '<label  style = \'color:white; font-family:Verdana; font-size: 150%;\' for="Cantidad">Cantidad</label><br><br>' +
        '<input  type="text" style = \'width: 25%; font-family:Verdana;  height: 30px;  \' id="Cantidadx" type="text" name="Cantidadx"  required>' +
        '<select  required style = \'width: 25%; font-family:Verdana;  height: 37px;  \' name="Unidadx" id="Unidadx">' +
        '<option>mg/dl</option>' +
        '<option>%</option>' +
        '<option>UI/L</option>' +
        '</select><br><br>' +

        '<label  style = \'color:white; font-family:Verdana; font-size: 150%;\' for="Fecha">Fecha</label><br><br>' +
        '<input style = \'width: 50%; font-family:Verdana;  height: 40px;\' id="Fechax" type="date" name="Fechax" required>'


      ,
      focusConfirm: false,
      confirmButtonText: "Guardar",
      confirmButtonColor: "black",
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        this.Tipo = (<HTMLInputElement>document.getElementById('Tipox')).value;
        this.Cantidad = (<HTMLInputElement>document.getElementById('Cantidadx')).value;
        this.Unidad = (<HTMLInputElement>document.getElementById('Unidadx')).value;
        this.Fecha = (<HTMLInputElement>document.getElementById('Fechax')).value;
        console.log("Los datos son :D");
        console.log("Tipo:" + this.Tipo + ".");
        console.log("Cantidad:" + this.Cantidad + ".");
        console.log("Unidad:" + this.Unidad + ".");
        console.log("Fecha:" + this.Fecha + ".")
        console.log("wau")
        console.log(JSON.stringify(this.Cantidad));
        var TipoDatoX:Boolean = true;
        if (this.tieneLetras(this.Cantidad) == true || this.Cantidad == "" || this.Fecha == "" || this.Unidad == "" || this.Tipo == "") {
          this.Alamars.Mensaje_De_Error("Datos incorrectos", "Los campos o datos a ingresar\n no cumplen con lo solicitado.\nINTENTELO DE NUEVO")
        } else {
          if(this.Tipo == 'ASAT-TGO' || this.Tipo  == 'ALAT-TGP'){
            console.log("ASSST")
            if(this.Unidad != 'UI/L'){
              TipoDatoX = false;
              this.Alamars.Mensaje_De_Error("Datos incorrectos", "La hematología "+ this.Tipo +" utiliza UI/L como unidad\nINTENTELO DE NUEVO");
            }
          }else if(this.Tipo == 'HEMOGLOBINA GLICOSILADA'){
            console.log("Hemoglovina")
            if(this.Unidad != '%'){
              TipoDatoX = false;
              this.Alamars.Mensaje_De_Error("Datos incorrectos", "La hematología "+ this.Tipo+" utiliza % como unidad\nINTENTELO DE NUEVO");
            }
          }else{
            console.log("otroooooooo");
            if(this.Unidad != 'mg/dl'){
              TipoDatoX = false;
              this.Alamars.Mensaje_De_Error("Datos incorrectos", "La hematología "+ this.Tipo +" utiliza mg/ld como unidad\nINTENTELO DE NUEVO");
            }
          }
          if(TipoDatoX == true){
             this.Mensaje_Estas_Seguro("Datos registrados", "Sus datos fueron almacenados correctamente",
            "Revisar Datos", "Al dar Afirmar sus datos serán almacenados y no podrá modificarlos.");
          
          }
         
        }
      }
    })
  }
  tieneLetras(texto: string): boolean {
    for (let i = 0; i < texto.length; i++) {
      if (this.mayusculas.indexOf(texto.charAt(i), 0) != -1) {
        console.log("AAAAA" + texto.charAt(i));
        return true;
      }
      if (this.simbolos.indexOf(texto.charAt(i), 0) != -1) {
        console.log("BBBBBB" + texto.charAt(i));
        return true;
      }
      if (this.minusculas.indexOf(texto.charAt(i), 0) != -1) {
        console.log("CCCCCCC" + texto.charAt(i));
        return true;
      }
    }
    return false;

  }
  Mensaje_Estas_Seguro(TituloCorrecto: string, DescricionCorrecta: string,
    TituloIncorrecto: string, DescripcionIncorrecta: string) {
    Swal.fire({
      background: '#fff no-repeat center url(https://github.com/romeoaxpuac123/MisImagenes/blob/main/Pruebas/Prueba.png?raw=true)',
      imageUrl: 'https://github.com/romeoaxpuac123/MisImagenes/blob/main/Diabetic/Iconos/advertencia.png?raw=true',
      imageHeight: 120,
      title: TituloIncorrecto,
      text: DescripcionIncorrecta,
      showCancelButton: true,
      confirmButtonColor: 'black',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Afirmar',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          background: '#fff no-repeat center url(https://github.com/romeoaxpuac123/MisImagenes/blob/main/Pruebas/Prueba.png?raw=true)',
          imageUrl: 'https://github.com/romeoaxpuac123/MisImagenes/blob/main/Diabetic/Iconos/ok.png?raw=true',
          imageHeight: 120,
          title: "<a style=\"color:black\">" + TituloCorrecto + "</a>",
          text: DescricionCorrecta,
          confirmButtonText: "Aceptar",
          confirmButtonColor: "black",
        });
        console.log("ACÁ VA EL CODIGO BUENO");
      }

    })
  }
}
