import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signupView: boolean = false;

  forma: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private uiService:UiServiceService) {

    this.crearFormulario();
   }

  ngOnInit() {
  }

  toggleSignUpView () {
    this.signupView = !this.signupView
  };

  get emailNoValido(){
    return this.forma.get('email').invalid && this.forma.get('email').touched
  }

  get passwordNoValido(){
    return this.forma.get('password').invalid && this.forma.get('password').touched
  }

  crearFormulario(){

    this.forma = this.formBuilder.group({
      email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
      password:['', Validators.required],
    });

  }

  async loginForm(event: Event){
    const datos = this.forma.value;
    console.log(this.forma.valid);
    console.log(this.forma.value);
  
    const valido = await this.usuarioService.login(datos.email, datos.password);   
    
    if(valido){
      // navegar a la pantalla siguiente con el navCtrl no se puede devolver hasta que se loguee
      this.navCtrl.navigateRoot('/servicios', {animated:true});
    }else{
      //mostrar alerta de usuario y contraseña no son correctos
      this.uiService.alertaInformativa(
        'Usuario y Constraseña no son correctos'
      );
    }

  };

}
