import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/buscar.svg',
      titulo: 'Consulta de Reportes',
      desc: 'Seleccionando en el botón de CONSULTA, puedes consultar (buscar) un reporte ya creado'
    },
    {
      img: '/assets/crear.svg',
      titulo: 'Creación de Reportes',
      desc: 'Seleccionando en el botón de CREAR, puedes generar tu reporte de Linea o de Internet Aba'
    }
  ];

  constructor( ) { }

  ngOnInit() {
  }




 

}
