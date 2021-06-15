import { Component, OnInit } from '@angular/core';
import { AlertasComponent } from '../alertas/alertas.component';
import { MicroserviciosService } from '../../services/microservicios.service';
import { LocalService } from '../../services/local.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {
  public Alamars: AlertasComponent = new AlertasComponent;
  public OnnSesion: boolean = false;
  public Medico: boolean = true;
  constructor(
    private navegacion: Router,
    private Microservicio: MicroserviciosService,
    private Almacenamiento: LocalService,
  ) { }

  ngOnInit(): void {
    this.OnnSesion = this.SesionOnn();
    
    console.log("Ssss");
    console.log(this.OnnSesion);
    console.log(this.Medico);
    if (this.OnnSesion == false) {
      this.Alamars.Mensaje_De_Error("Usuario sin permisos", "Para hacer uso de esta función inice sesión");
      this.navegacion.navigate(['']);
    }else{
      this.Medico = this.EsMedico();
      if(this.Medico == true){
        this.Alamars.Mensaje_De_Error("Usuario sin permisos", "Para hacer uso de esta función inice sesión");
      this.navegacion.navigate(['']);
      }
    }
    
  }
  SesionOnn(): boolean {
    var Info = this.Almacenamiento.ObtenerInformacionLS("Usuario");
    console.log("hooooooooooolaXD");
    console.log("-" + Info + "-")
    var o = JSON.parse(Info);
    console.log(o);
    if (o != null) {
      return true;
    }

    return false;
  }
  EsMedico(): boolean {
    var Info = this.Almacenamiento.ObtenerInformacionLS("Tipo");

    var o = JSON.parse(Info);
    if (o.TipoUsuario == 'Medico') {
      return true;
    }
    return false;
  }

}
