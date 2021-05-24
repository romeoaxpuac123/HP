import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesentacion',
  templateUrl: './pesentacion.component.html',
  styleUrls: ['./pesentacion.component.css']
})
export class PesentacionComponent implements OnInit {

  public Coleccion: string[] = [];
  public Direcciones:string [] = [];
  public i:number = 0;
  constructor() { 
    this.Coleccion = ["https://github.com/romeoaxpuac123/MisImagenes/blob/main/Diabetic/Banner5.jpg?raw=true",
    "https://github.com/romeoaxpuac123/MisImagenes/blob/main/Diabetic/Banner2.jpg?raw=true",
    "https://github.com/romeoaxpuac123/MisImagenes/blob/main/Diabetic/Banner4.jpg?raw=true",
    "https://github.com/romeoaxpuac123/MisImagenes/blob/main/Diabetic/Banner1.jpg?raw=true"
 ]

this.Direcciones = ["https://www.facebook.com/HopeDiabetic",
     "",                      
     "https://www.diainternacionalde.com/ficha/dia-mundial-diabetes",
     "",

]
   
  }

  ngOnInit(): void {
    setInterval(() => {this.CambiarImagen()}, 5000);
  }

  CambiarImagen(){
    let imagen: any = document.getElementById('slide');
    let ruta: any = document.getElementById('ruta');
    imagen.src = this.Coleccion[this.i];
    ruta.href = this.Direcciones[this.i];
    this.i = (this.i < this.Coleccion.length - 1) ? this.i+1 : 0;
  }

}
