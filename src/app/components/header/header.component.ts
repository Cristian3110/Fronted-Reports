import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  constructor( private usuarioService: UsuarioService) { }

  ngOnInit() {}


  logout(){
    console.log('logout');
    this.usuarioService.logout();
  }
}
