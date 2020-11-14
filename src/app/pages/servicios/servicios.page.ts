import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/phone.svg',
      titulo: 'Reportes de Lineas Telefónicas',
      desc: 'Seleccionando en el botón de LINEA, puedes consultar o crear tu reporte'
    },
    {
      img: '/assets/network.svg',
      titulo: 'Reportes de Internet Aba',
      desc: 'Seleccionando en el botón de INTERNET, puedes consultar o crear tu reporte'
    }
  ];

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {

    // EN CASO DE QUE QUERAMOS LA COLECCIÓN DE REPORTES QUE SE HAN GENERADO EN NUESTRO SERVICIO 

    // this.reportsService.getReports().subscribe( resp =>{
    //   console.log(resp.ReportesTotales);
    // })


    // this.reportsService.getReport('2123638940').subscribe (resp =>{
    //   console.log(resp);
    // })
  }

}
