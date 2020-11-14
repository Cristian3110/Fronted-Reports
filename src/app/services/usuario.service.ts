import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';
 



const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  // nuevo código
  private usuario: Usuario = {};

  constructor( private http: HttpClient,
               private storage: Storage,
               private navCtrl: NavController) { }



 login(email: string, password: string){
    
    const data = {email, password};

    return new Promise( resolve =>{

      this.http.post<Usuario>(`${URL}/user/login`, data)
      .subscribe(resp =>{
        console.log(resp);
  
        if ( resp['ok'] ){
          this.guardarToken(resp['token']);
          resolve(true);
        }else{
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });

    });

  }

  logout(){
    this.token = null;
    this.usuario = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', {animated: true});
    

  }



  register(nombre: string, email:string, password: string){
    
    const data2 = {nombre, email, password};
      
    return new Promise(resolve => {

      this.http.post<Usuario>(`${URL}/user/create`, data2)
          .subscribe(resp=>{
            console.log(resp); // solo para visualizar que se esta creando el usuario

            if ( resp['ok'] ){
              this.guardarToken(resp['token']);
              resolve(true);
            }else{
              this.token = null;
              this.storage.clear();
              resolve(false);
            }

          })
    });
  }

  

  guardarToken(token: string){

    this.token = token;

    this.storage.set('token', token);
  };





}
