import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.scss'],
})
export class HeaderPrincipalComponent implements OnInit {

  @Input() titulo: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {}

  logout(){
    console.log('logout');
    this.usuarioService.logout();
  }

}
