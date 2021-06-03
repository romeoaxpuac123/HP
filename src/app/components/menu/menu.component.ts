import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl:  './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public VerMenu:boolean=false;
  public NombreUsuario:string = "";
  public FotoPerfil:string="";
  public EsMedico:boolean = true;
  constructor(
  
  ) 
  {
    this.FotoPerfil = "https://i.pinimg.com/736x/2f/5e/4e/2f5e4e12d4cf926cb2fc780dec2d7aae.jpg",
    this.NombreUsuario = "Romeo"
    this.EsMedico = false;
  }

  ngOnInit(): void {
    console.log("Si entro")
  }
  ExpandirMenu() {
    let tipo: any = document.getElementById('sidemenu');
    let cuerpo: any = document.getElementById('cuerpo');
    let cabeza: any = document.getElementById('Cabeza');
    let titulo: any = document.getElementById('menu-btn');
    if (tipo.className == "menu-collapsed") {
      tipo.className = "menu-expanded";
      cuerpo.style = "margin-left: 300px;"
      cabeza.firstChild.style = "margin-left: 300px;"
      titulo.title="Esconder Menú";
      this.VerMenu = true;      
    } else {
      tipo.className = "menu-collapsed";
      cuerpo.style = "margin-left: 50px;"
      cabeza.firstChild.style = "margin-left: 50px;"
      titulo.title="Desplegar Menú";
      this.VerMenu = false;
    }
  }

}
