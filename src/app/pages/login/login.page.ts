import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { NavController, ToastController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signupView: boolean = false;

  forma: FormGroup;
  forma2: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private toastCtrl: ToastController) {

    this.crearFormulario2();
    this.crearFormulario();
   }

  ngOnInit() {
  }

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

  // FORMULARIO 2 DE REGISTRO

  toggleSignUpView () {
    this.signupView = !this.signupView
  };

  get nameNoValido2(){
    return this.forma2.get('name1').invalid && this.forma2.get('name1').touched
  }

  get emailNoValido2(){
    return this.forma2.get('email2').invalid && this.forma2.get('email2').touched
  }

  get passwordNoValido2(){
    return this.forma2.get('password2').invalid && this.forma2.get('password2').touched
  }

  crearFormulario2(){

    this.forma2 = this.formBuilder.group({
      name1: ['', [Validators.required,  Validators.minLength(4)]],
      email2:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
      password2:['', Validators.required],
    });

  }

  async loginForm(event: Event){

    event.preventDefault();

    const datos = this.forma.value;
    console.log(this.forma.valid);
    console.log(this.forma.value);
  
    const valido = await this.usuarioService.login(datos.email, datos.password);   
    
    if(valido){
      // navegar a la pantalla siguiente con el navCtrl no se puede devolver hasta que se loguee
      this.navCtrl.navigateRoot('/gestion', {animated:true});
    }else{
      //mostrar alerta de usuario y contraseña no son correctos
      this.presentToast('Usuario / Contraseña no son correctos');
    }

    this.forma.reset();
  };


  async registerForm(event: Event){

    event.preventDefault();

    const datos2 = this.forma2.value;
    console.log(this.forma2.valid);
    console.log(this.forma2.value);
  
    const valido2 = await this.usuarioService.register(datos2.name1, datos2.email2, datos2.password2);  

      if(valido2){
      // navegar a la pantalla siguiente con el navCtrl no se puede devolver hasta que se loguee
       this.navCtrl.navigateRoot('/gestion', {animated:true});
    }else{
      //mostrar alerta de usuario y contraseña no son correctos
      this.presentToast('Este email ya está registrado/ complete los datos');
    }

    this.forma2.reset();
  };

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      color: 'danger',
      position: 'top',
      animated: true,
      mode: "ios",
     
       
    });
    toast.present();
  }

};
