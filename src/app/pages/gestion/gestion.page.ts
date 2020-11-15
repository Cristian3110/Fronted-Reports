import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
