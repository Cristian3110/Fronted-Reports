import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from '../../services/reports.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-forminter',
  templateUrl: './forminter.component.html',
  styleUrls: ['./forminter.component.scss'],
})
export class ForminterComponent implements OnInit {

  FormInter: FormGroup;

  fallas: any = [
    'Navega Lento',
    'No Navega'
  ];

  tipoFallas: any = [
    'La luz ADSL del módem está fija',
    'La luz ADSL del módem está intermitente',
    'La luz de internet está en color rojo',
    'No prenden las luces del módem',
    'No me carga ninguna página',
    'Carga las páginas, pero muy lento',
    'Se cae el internet cada cierto tiempo'
  ];

  constructor(private formBuilder: FormBuilder,
              private reportsService: ReportsService,
              private toastCtrl: ToastController) {

                this.crearFormulario();
               }

  ngOnInit() {}


  get nameNoValido(){
    return this.FormInter.get('name').invalid && this.FormInter.get('name').touched
  }

  get abonadoNoValido(){
    return this.FormInter.get('abonado').invalid && this.FormInter.get('abonado').touched
  }

  get emailNoValido(){
    return this.FormInter.get('email').invalid && this.FormInter.get('email').touched
  }

  get tlfContactoNoValido(){
    return this.FormInter.get('tlfContacto').invalid && this.FormInter.get('tlfContacto').touched
  }

  get fallaNoValido(){
    return this.FormInter.get('falla').invalid && this.FormInter.get('falla').touched
  }

  get tipoFallaNoValido(){
    return this.FormInter.get('tipoFalla').invalid && this.FormInter.get('tipoFalla').touched
  }

  crearFormulario(){

    this.FormInter = this.formBuilder.group({
      name: ['', Validators.required],
      abonado: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
      tlfContacto:['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      falla:['', Validators.required],
      tipoFalla:['',Validators.required]
    });
  }


 
  // haciendo pruebas para colocar un toastController

  async presentToastOK(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 6000,
      color: 'primary',
      position: 'top',
      animated: true,
      mode: "ios",
     
       
    });
    toast.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 6000,
      color: 'danger',
      position: 'top',
      animated: true,
      mode: "ios",
     
       
    });
    toast.present();
  }
 
  async presentToastError(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 6000,
      color: 'dark',
      position: 'top',
      animated: true,
      mode: "ios",
     
       
    });
    toast.present();
  }


  reportLine(event: Event){

    if(this.FormInter.invalid){return;}

    event.preventDefault();

    const datos = this.FormInter.value;
    console.log(this.FormInter.valid);
    console.log(this.FormInter.value);


    const valido = this.reportsService.crearReportsLine(datos._id, datos.name,
                                                    datos.abonado, 
                                                    datos.email, 
                                                    datos.tlfContacto, 
                                                    datos.falla, 
                                                    datos.tipoFalla)
              .subscribe((resp:any) =>{
                console.log(resp);
                
                if ( resp['ok'] ){
                  this.presentToastOK(`Su reporte con el número de Abonado: ${resp.reporte.abonado} se ha creado satisfactoriamente bajo el código ${resp.reporte._id} en fecha: ${resp.reporte.created}`)
                  
                }else{
                 
                  this.presentToast(`${resp.mensaje}, por favor dirigirse a la página de consulta`)
                }

              },(errorSer)=>{

                this.presentToastError('Error 500:  Internal Server Error');
              })  
      
            
      
            
       
        this.FormInter.reset();
    
        
   


};

}
