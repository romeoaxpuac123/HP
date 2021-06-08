import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  chart: any = [];
  FechasIndiviaduales: any = [];
  ValoresIndivuales: any = [];
  DatosMinimosIndividuales: any = [];
  DatosMaximosIndividuales: any = [];
  //Para Hemoglobina
  DatosHEMOGLOBINAX: any = [];
  DatosHEMOGLOBINAY: any = [];
  chartHEMOGLOBINA: any = [];
  //PARA CREATININA
  DatosCREATININAX: any = [];
  DatosCREATININAY: any = [];
  chartCREATININA: any = [];
  //Para GLUCOSA PRE-PRANDRIAL
  DatosPRE_PRANDRIALX: any = [];
  DatosPRE_PRANDRIALY: any = [];
  chartPRE_PRANDRIAL: any = [];
  //Para GLUCOSA POST-PRANDRIAL
  DatosPOST_PRANDRIALX: any = [];
  DatosPOST_PRANDRIALY: any = [];
  chartPOST_PRANDRIAL: any = [];
  //Para GLUCOSA POST y PRE -PRANDRIAL
  DatosPOST_PRE_PRANDRIALX: any = [];
  DatosPOST_PRE_PRANDRIALY1: any = [];
  DatosPOST_PRE_PRANDRIALY2: any = [];
  chartPOST_PRE_PRANDRIAL: any = [];
  //Para GLUCOSA POST-PRANDRIAL
  DatosGlucosaTotalX: any = [];
  DatosGlucosaTotalY: any = [];
  chartGlucosaTotal: any = [];
  //Para colesterol totol
  DatosColesterolTotalX: any = [];
  DatosColesterolTotalY: any = [];
  chartColesterolTotal: any = [];
  //Para colesterol HDL y LDL
  DatosColesterolHDLX: any = [];
  DatosColesterolHDLY: any = [];
  DatosColesterolLDLY: any = [];
  chartColesterolHDL: any = [];
  //Para TRIGLICERIDOS
  DatosTRIGLICERIDOSX: any = [];
  DatosTRIGLICERIDOSY: any = [];
  chartTRIGLICERIDOS: any = [];
  //Para LIPIDOS
  DatosLIPIDOSX: any = [];
  DatosLIPIDOSY: any = [];
  chartLIPIDOS: any = [];
  //Para LIPIDOS
  DatosASPARTATOX: any = [];
  DatosASPARTATOY: any = [];
  chartASPARTATO: any = [];
  //Para LIPIDOS
  DatosALANINOX: any = [];
  DatosALANINOY: any = [];
  chartALANINO: any = [];
  //fin variables graficas
  public TipoHemalogias: any = [];
  public RangoDeFechas: any = [];
  constructor() {
    this.TipoHemalogias = [
      {
        "Nombre": "Glucosa"
      },
      {
        "Nombre": "Colesterol"
      }
    ];
    this.RangoDeFechas = [
      "Ultimo día", "Ultimos cinco días", "Ultima Semana", "Ultimas dos semanas", "Ultimo mes", "Ultimos tres meses"
    ];
  }

  ngOnInit(): void {
    //GRAFICA INDIDIVIDUAL INICIAL

    this.FechasIndiviaduales = ['01/06/2021', '02/06/2021', '03/06/2021', '04/06/2021', '05/06/2021', '06/06/2021'];
    this.ValoresIndivuales = [95, 145, 80, 130, 100, 96];
    this.DatosMaximosIndividuales = [110, 110, 110, 110, 110, 110];
    this.DatosMinimosIndividuales = [65, 65, 65, 65, 65, 65];
    let titulo = "GLUCOSA PRE-PRANDRIAL"
    this.chart = new Chart('GraficaIndividual', {
      type: 'bar',
      data: {
        labels: this.FechasIndiviaduales,
        datasets: [
          {
            label: 'Valor Minimo',
            data: this.DatosMinimosIndividuales,
            backgroundColor: [
              '#F95D70'
            ],
            borderColor: [
              '#F95D70'
            ],
            borderWidth: 1
          },
          {
            label: titulo,
            data: this.ValoresIndivuales,
            backgroundColor: [
              '#FDF63E'
            ],
            borderColor: [
              '#FDF63E'
            ],
            borderWidth: 1
          },
          {
            label: 'Valor Máximo',
            data: this.DatosMaximosIndividuales,
            backgroundColor: [
              '#27C3E4'
            ],
            borderColor: [
              '#27C3E4'
            ],
            borderWidth: 1
          }


        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    //Acá va la gráfica individual de HEMOGLOBINA
    this.DatosHEMOGLOBINAX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosHEMOGLOBINAY = [6.6, 7.8, 9.9, 4.3, 6.6, 8];
    this.chartHEMOGLOBINA = new Chart('GraficaHEMOGLOBINA', {
      type: "line",
      data: {
        labels: this.DatosHEMOGLOBINAX,
        datasets: [{
          label: 'Hemoglobina',
          backgroundColor: "#F95D70",
          borderColor: "#F95D70",
          data: this.DatosHEMOGLOBINAY
        }]
      },
    });
    //Acá va la gráfica individual de CREATININA
    this.DatosCREATININAX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosCREATININAY = [0.6, 0.8, 0.9, 1.3, 0.6, 0.48];
    this.chartCREATININA = new Chart('GraficaCREATININA', {
      type: "line",
      data: {
        labels: this.DatosCREATININAX,
        datasets: [{
          label: 'Creatinina',
          backgroundColor: "#69DD4C",
          borderColor: "#69DD4C",
          data: this.DatosCREATININAY
        }]
      },
    });

    //Acá va la gráfica individual de PREPANDRIAL
    this.DatosPRE_PRANDRIALX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosPRE_PRANDRIALY = [95, 100, 89, 78, 88, 99];
    this.chartPRE_PRANDRIAL = new Chart('GraficaGLUCOSAPRE_PRANDRIAL', {
      type: "line",
      data: {
        labels: this.DatosPRE_PRANDRIALX,
        datasets: [{
          label: 'Glucosa Pre-Prandrial',
          backgroundColor: "#FDF63E",
          borderColor: "#FDF63E",
          data: this.DatosPRE_PRANDRIALY
        }]
      },
    });

    //Acá va la gráfica individual de postPANDRIAL
    this.DatosPOST_PRANDRIALX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosPOST_PRANDRIALY = [95, 100, 89, 78, 88, 99];
    this.chartPOST_PRANDRIAL = new Chart('GraficaGLUCOSAPOST_PRANDRIAL', {
      type: "line",
      data: {
        labels: this.DatosPOST_PRANDRIALX,
        datasets: [{
          label: 'Glucosa Post-Prandrial',
          backgroundColor: "#8990F8",
          borderColor: "#8990F8",
          data: this.DatosPOST_PRANDRIALY
        }]
      },
    });
    //Acá va la gráfica individual de PRE_POST_PANDRIAL
    this.DatosPOST_PRE_PRANDRIALX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosPOST_PRE_PRANDRIALY1 = [95, 100, 89, 78, 88, 99];
    this.DatosPOST_PRE_PRANDRIALY2 = [120, 140, 100, 99, 120, 110];
    this.chartPOST_PRE_PRANDRIAL = new Chart('GraficaGLUCOSAPOST_PEST', {
      type: "line",
      data: {
        labels: this.DatosPOST_PRANDRIALX,
        datasets: [{
          label: 'Glucosa Post-Prandrial',
          backgroundColor: "#F95D70",
          borderColor: "#F95D70",
          data: this.DatosPOST_PRE_PRANDRIALY2
        },
        {
          label: 'Glucosa Pre-Prandrial',
          backgroundColor: "#69DD4C",
          borderColor: "#69DD4C",
          data: this.DatosPOST_PRE_PRANDRIALY1
        }
        ]
      },
    });
    //Acá va la gráfica de todas las glucosas
    this.DatosGlucosaTotalX = ["01/05/2021", "01/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosGlucosaTotalY = [95, 100, 89, 78, 88, 99];
    this.chartGlucosaTotal = new Chart('GraficaGLUCOSA_TOTAL', {
      type: "line",
      data: {
        labels: this.DatosGlucosaTotalX,
        datasets: [{
          label: 'Glucosa',
          backgroundColor: "#8990F8",
          borderColor: "#8990F8",
          data: this.DatosGlucosaTotalY
        }]
      },
    });

    //Acá va la gráfica individual de Total Colesterol
    this.DatosColesterolTotalX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021", "07/05/2021"];
    this.DatosColesterolTotalY = [142, 100, 189, 168, 188, 110, 156];
    this.chartColesterolTotal = new Chart('GraficaCOLESTEROL_TOTAL', {
      type: "line",
      data: {
        labels: this.DatosColesterolTotalX,
        datasets: [{
          label: 'Colesterol total',
          backgroundColor: "#FDF63E",
          borderColor: "#FDF63E",
          data: this.DatosColesterolTotalY
        }]
      },
    });

    //Acá va la gráfica individual de Colesterol HDL Y LDL
    this.DatosColesterolHDLX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosColesterolHDLY = [95, 100, 89, 78, 88, 99];
    this.DatosColesterolLDLY = [120, 140, 100, 99, 120, 110];
    this.chartColesterolHDL = new Chart('GraficaCOLESTEROL_HDL_LDL', {
      type: "line",
      data: {
        labels: this.DatosColesterolHDLX,
        datasets: [{
          label: 'Colesterol HDL',
          backgroundColor: "#F95D70",
          borderColor: "#F95D70",
          data: this.DatosColesterolHDLY
        },
        {
          label: 'Colesterol LDL',
          backgroundColor: "#69DD4C",
          borderColor: "#69DD4C",
          data: this.DatosColesterolLDLY
        }
        ]
      },
    });
    //acá va la grafica indificual de Lipidos
    this.DatosLIPIDOSX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosLIPIDOSY = [95, 100, 89, 78, 88, 99];
    this.chartLIPIDOS = new Chart('GraficaLIPIDOS', {
      type: "line",
      data: {
        labels: this.DatosLIPIDOSX,
        datasets: [{
          label: 'Lipidos',
          backgroundColor: "#FDF63E",
          borderColor: "#FDF63E",
          data: this.DatosLIPIDOSY
        }]
      },
    });

    //Acá va la gráfica individual de Triglicerdios
    this.DatosTRIGLICERIDOSX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosTRIGLICERIDOSY = [95, 100, 89, 78, 88, 99];
    this.chartTRIGLICERIDOS = new Chart('GraficaTRIGLICERIDOS', {
      type: "line",
      data: {
        labels: this.DatosTRIGLICERIDOSX,
        datasets: [{
          label: 'Trigliceridos',
          backgroundColor: "#8990F8",
          borderColor: "#8990F8",
          data: this.DatosTRIGLICERIDOSY
        }]
      },
    });

    //Acá va la gráfica individual de ASPARTATO
    this.DatosASPARTATOX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosASPARTATOY = [6.6, 7.8, 9.9, 4.3, 6.6, 8];
    this.chartASPARTATO = new Chart('GraficaASPARTATO', {
      type: "line",
      data: {
        labels: this.DatosASPARTATOX,
        datasets: [{
          label: 'ASAT-TGO',
          backgroundColor: "#F95D70",
          borderColor: "#F95D70",
          data: this.DatosASPARTATOY
        }]
      },
    });
    //Acá va la gráfica individual de CREATININA
    this.DatosALANINOX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosALANINOY = [0.6, 0.8, 0.9, 1.3, 0.6, 0.48];
    this.chartALANINO = new Chart('GraficaALANINO', {
      type: "line",
      data: {
        labels: this.DatosALANINOX,
        datasets: [{
          label: 'ALAT-TGP',
          backgroundColor: "#69DD4C",
          borderColor: "#69DD4C",
          data: this.DatosALANINOY
        }]
      },
    });
  }

  VerReporteIndividual() {
    this.chart.destroy();

    this.FechasIndiviaduales = ['01/06/2021', '02/06/2021', '03/06/2021', '04/06/2021', '05/06/2021', '06/06/2021'];
    this.ValoresIndivuales = [95, 145, 80, 130, 100, 96];
    this.DatosMaximosIndividuales = [110, 110, 110, 110, 110, 110];
    this.DatosMinimosIndividuales = [0, 65, 65, 65, 65, 65];
    let titulo = "GLUCOSA PRE-PRANDRIAL"
    if (this.DatosMinimosIndividuales[0] == 0) {
      this.chart = new Chart('GraficaIndividual', {
        type: 'bar',
        data: {
          labels: this.FechasIndiviaduales,
          datasets: [
            {
              label: titulo,
              data: this.ValoresIndivuales,
              backgroundColor: [
                '#FDF63E'
              ],
              borderColor: [
                '#FDF63E'
              ],
              borderWidth: 1
            },
            {
              label: 'Valor Máximo',
              data: this.DatosMaximosIndividuales,
              backgroundColor: [
                '#27C3E4'
              ],
              borderColor: [
                '#27C3E4'
              ],
              borderWidth: 1
            }


          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      this.chart = new Chart('GraficaIndividual', {
        type: 'bar',
        data: {
          labels: this.FechasIndiviaduales,
          datasets: [
            {
              label: 'Valor Minimo',
              data: this.DatosMinimosIndividuales,
              backgroundColor: [
                '#F95D70'
              ],
              borderColor: [
                '#F95D70'
              ],
              borderWidth: 1
            },
            {
              label: titulo,
              data: this.ValoresIndivuales,
              backgroundColor: [
                '#FDF63E'
              ],
              borderColor: [
                '#FDF63E'
              ],
              borderWidth: 1
            },
            {
              label: 'Valor Máximo',
              data: this.DatosMaximosIndividuales,
              backgroundColor: [
                '#27C3E4'
              ],
              borderColor: [
                '#27C3E4'
              ],
              borderWidth: 1
            }


          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    //limpiamos en canvas


  }
  Imprimir() {
    console.log("Codigo para crear PDF");
  }
  ActualizarReprotes() {
    console.log("Codigo actualizar XD");
    let date: Date = new Date("2019-01-16");
    this.ActualizarHEMOGLOBINA(date);
    this.ActualizarCREATININA(date);
    this.ActualizarGLUCOSAPRE_PRANDRIAL(date);
    this.ActualizarGLUCOSAPOST_PRANDRIAL(date);
    this.ActualizarGLUCOSAPOST_PEST(date);
    this.ActualizarGLUCOSA_TOTAL(date);
    this.ActualizarCOLESTEROL_TOTAL(date);
    this.ActualizarCOLESTEROL_HDL_LDL(date);
    this.ActualizarTRIGLICERIDOS(date);
    this.ActualizarLIPIDOS(date);
    this.ActualizarASPARTATO(date);
    this.ActualizarALANINO(date);

  }
  //Metodos individuales para cada gráfica
  ActualizarHEMOGLOBINA(Fechas: Date) {
    this.chartHEMOGLOBINA.destroy();
    this.DatosHEMOGLOBINAX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosHEMOGLOBINAY = [10.6, 7.8, 9.9, 4.3, 6.6, 8];
    this.chartHEMOGLOBINA = new Chart('GraficaHEMOGLOBINA', {
      type: "line",
      data: {
        labels: this.DatosHEMOGLOBINAX,
        datasets: [{
          label: 'Hemoglobina',
          backgroundColor: "#F95D70",
          borderColor: "#F95D70",
          data: this.DatosHEMOGLOBINAY
        }]
      },
    });
  }
  ActualizarCREATININA(Fechas: Date) {
    this.chartCREATININA.destroy();
    this.DatosCREATININAX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosCREATININAY = [10.6, 0.8, 0.9, 1.3, 0.6, 0.48];
    this.chartCREATININA = new Chart('GraficaCREATININA', {
      type: "line",
      data: {
        labels: this.DatosCREATININAX,
        datasets: [{
          label: 'Creatinina',
          backgroundColor: "#69DD4C",
          borderColor: "#69DD4C",
          data: this.DatosCREATININAY
        }]
      },
    });
  }
  ActualizarGLUCOSAPRE_PRANDRIAL(Fechas: Date) {
    //Acá va la gráfica individual de PREPANDRIAL
    this.chartPRE_PRANDRIAL.destroy();
    this.DatosPRE_PRANDRIALX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosPRE_PRANDRIALY = [10, 10, 89, 78, 88, 99];
    this.chartPRE_PRANDRIAL = new Chart('GraficaGLUCOSAPRE_PRANDRIAL', {
      type: "line",
      data: {
        labels: this.DatosPRE_PRANDRIALX,
        datasets: [{
          label: 'Glucosa Pre-Prandrial',
          backgroundColor: "#FDF63E",
          borderColor: "#FDF63E",
          data: this.DatosPRE_PRANDRIALY
        }]
      },
    });
  }
  ActualizarGLUCOSAPOST_PRANDRIAL(Fechas: Date) {
    this.chartPOST_PRANDRIAL.destroy();
    //Acá va la gráfica individual de postPANDRIAL
    this.DatosPOST_PRANDRIALX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosPOST_PRANDRIALY = [10, 100, 89, 78, 88, 99];
    this.chartPOST_PRANDRIAL = new Chart('GraficaGLUCOSAPOST_PRANDRIAL', {
      type: "line",
      data: {
        labels: this.DatosPOST_PRANDRIALX,
        datasets: [{
          label: 'Glucosa Post-Prandrial',
          backgroundColor: "#8990F8",
          borderColor: "#8990F8",
          data: this.DatosPOST_PRANDRIALY
        }]
      },
    });
  }
  ActualizarGLUCOSAPOST_PEST(Fechas: Date) {
    this.chartPOST_PRE_PRANDRIAL.destroy();
    //Acá va la gráfica individual de PRE_POST_PANDRIAL
    this.DatosPOST_PRE_PRANDRIALX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosPOST_PRE_PRANDRIALY1 = [10, 100, 89, 78, 88, 99];
    this.DatosPOST_PRE_PRANDRIALY2 = [120, 10, 100, 99, 120, 110];
    this.chartPOST_PRE_PRANDRIAL = new Chart('GraficaGLUCOSAPOST_PEST', {
      type: "line",
      data: {
        labels: this.DatosPOST_PRANDRIALX,
        datasets: [{
          label: 'Glucosa Post-Prandrial',
          backgroundColor: "#F95D70",
          borderColor: "#F95D70",
          data: this.DatosPOST_PRE_PRANDRIALY2
        },
        {
          label: 'Glucosa Pre-Prandrial',
          backgroundColor: "#69DD4C",
          borderColor: "#69DD4C",
          data: this.DatosPOST_PRE_PRANDRIALY1
        }
        ]
      },
    });

  }
  ActualizarGLUCOSA_TOTAL(Fechas: Date) {
    this.chartGlucosaTotal.destroy();
    //Acá va la gráfica de todas las glucosas
    this.DatosGlucosaTotalX = ["01/05/2021", "01/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosGlucosaTotalY = [10, 100, 10, 78, 88, 99];
    this.chartGlucosaTotal = new Chart('GraficaGLUCOSA_TOTAL', {
      type: "line",
      data: {
        labels: this.DatosGlucosaTotalX,
        datasets: [{
          label: 'Glucosa',
          backgroundColor: "#8990F8",
          borderColor: "#8990F8",
          data: this.DatosGlucosaTotalY
        }]
      },
    });
  }
  ActualizarCOLESTEROL_TOTAL(Fechas: Date) {
    this.chartColesterolTotal.destroy();
    //Acá va la gráfica individual de Total Colesterol
    this.DatosColesterolTotalX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021", "07/05/2021"];
    this.DatosColesterolTotalY = [10, 100, 189, 168, 188, 110, 15];
    this.chartColesterolTotal = new Chart('GraficaCOLESTEROL_TOTAL', {
      type: "line",
      data: {
        labels: this.DatosColesterolTotalX,
        datasets: [{
          label: 'Colesterol total',
          backgroundColor: "#FDF63E",
          borderColor: "#FDF63E",
          data: this.DatosColesterolTotalY
        }]
      },
    });

  }
  ActualizarCOLESTEROL_HDL_LDL(Fechas: Date) {
    this.chartColesterolHDL.destroy();
    //Acá va la gráfica individual de Colesterol HDL Y LDL
    this.DatosColesterolHDLX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosColesterolHDLY = [10, 100, 10, 78, 88, 99];
    this.DatosColesterolLDLY = [120, 10, 100, 10, 120, 110];
    this.chartColesterolHDL = new Chart('GraficaCOLESTEROL_HDL_LDL', {
      type: "line",
      data: {
        labels: this.DatosColesterolHDLX,
        datasets: [{
          label: 'Colesterol HDL',
          backgroundColor: "#F95D70",
          borderColor: "#F95D70",
          data: this.DatosColesterolHDLY
        },
        {
          label: 'Colesterol LDL',
          backgroundColor: "#69DD4C",
          borderColor: "#69DD4C",
          data: this.DatosColesterolLDLY
        }
        ]
      },
    });
  }
  ActualizarTRIGLICERIDOS(Fechas: Date) {
    this.chartTRIGLICERIDOS.destroy();
    //Acá va la gráfica individual de Triglicerdios
    this.DatosTRIGLICERIDOSX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosTRIGLICERIDOSY = [10, 100, 10, 78, 88, 99];
    this.chartTRIGLICERIDOS = new Chart('GraficaTRIGLICERIDOS', {
      type: "line",
      data: {
        labels: this.DatosTRIGLICERIDOSX,
        datasets: [{
          label: 'Trigliceridos',
          backgroundColor: "#8990F8",
          borderColor: "#8990F8",
          data: this.DatosTRIGLICERIDOSY
        }]
      },
    });
  }
  ActualizarLIPIDOS(Fechas: Date) {
    //acá va la grafica indificual de Lipidos
    this.chartLIPIDOS.destroy();
    this.DatosLIPIDOSX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosLIPIDOSY = [95, 10, 89, 10, 88, 99];
    this.chartLIPIDOS = new Chart('GraficaLIPIDOS', {
      type: "line",
      data: {
        labels: this.DatosLIPIDOSX,
        datasets: [{
          label: 'Lipidos',
          backgroundColor: "#FDF63E",
          borderColor: "#FDF63E",
          data: this.DatosLIPIDOSY
        }]
      },
    });


  }
  ActualizarASPARTATO(Fechas: Date) {
    this.chartASPARTATO.destroy();
    //Acá va la gráfica individual de ASPARTATO
    this.DatosASPARTATOX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosASPARTATOY = [10, 7.8, 9.9, 4.3, 10, 8];
    this.chartASPARTATO = new Chart('GraficaASPARTATO', {
      type: "line",
      data: {
        labels: this.DatosASPARTATOX,
        datasets: [{
          label: 'ASAT-TGO',
          backgroundColor: "#F95D70",
          borderColor: "#F95D70",
          data: this.DatosASPARTATOY
        }]
      },
    });

  }
  ActualizarALANINO(Fechas: Date) {
    this.chartALANINO.destroy();
    //Acá va la gráfica individual de CREATININA
    this.DatosALANINOX = ["01/05/2021", "02/05/2021", "03/05/2021", "04/05/2021", "05/05/2021", "06/05/2021"];
    this.DatosALANINOY = [0.6, 10, 10, 1.3, 0.6, 0.48];
    this.chartALANINO = new Chart('GraficaALANINO', {
      type: "line",
      data: {
        labels: this.DatosALANINOX,
        datasets: [{
          label: 'ALAT-TGP',
          backgroundColor: "#69DD4C",
          borderColor: "#69DD4C",
          data: this.DatosALANINOY
        }]
      },
    });
  }


}
