import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/smartphone2.svg',
      titulo: 'Reporta tu Avería',
      desc: 'Servicio para Reportar incidencia en tus servicios desde tu Móvil, fácil y rápido!! Ahorra tiempo en solucionar el problema con tu servicio'
    },
    {
      img: '/assets/telephone.svg',
      titulo: 'Reportes de Lineas Telefónicas',
      desc: 'Tienes alguna falla en tu servicio de línea telefónica de CANTV? Por aqui puedes reportar tu incidencia de manera fácil, rápida y segura!!'
    },
    {
      img: '/assets/internet.svg',
      titulo: 'Reportes de Internet Aba',
      desc: 'Tienes alguna falla en tu servicio de internet Aba de CANTV? Por aqui puedes reportar tu incidencia de manera fácil, rápida y segura!!'
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  onClick(){
    this.navCtrl.navigateBack('/login');
  }

}
