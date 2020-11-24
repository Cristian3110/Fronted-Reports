import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from '../../services/reports.service';
import { ToastController } from '@ionic/angular';





@Component({
  selector: 'app-formline',
  templateUrl: './formline.component.html',
  styleUrls: ['./formline.component.scss'],
})
export class FormlineComponent implements OnInit {

  FormLine: FormGroup;

  fallas: any = [
    'No tiene tono',
    'Ruido en la linea',
    'Tono Ocupado',
    'Linea Ligada',
    'Se corta la llamada',
    'No puedo recargar saldo (Pre-pago)'
  ];

  tipoFallas: any = [
    'No emite llamada',
    'No recibe llamada',
    'No emite ni recibe llamada',
    'Se corta la llamada',
    'Se escucha ruido en la conversación',
    'No suena el teléfono cuando llaman',
    'Se escucha otra conversación en la llamada'
  ];

  constructor( private formBuilder: FormBuilder,
               private reportsService: ReportsService,
               private toastCtrl: ToastController
               ) {

          this.crearFormulario();
      }




  ngOnInit() {}


  get nameNoValido(){
    return this.FormLine.get('name').invalid && this.FormLine.get('name').touched
  }

  get abonadoNoValido(){
    return this.FormLine.get('abonado').invalid && this.FormLine.get('abonado').touched
  }

  get emailNoValido(){
    return this.FormLine.get('email').invalid && this.FormLine.get('email').touched
  }

  get tlfContactoNoValido(){
    return this.FormLine.get('tlfContacto').invalid && this.FormLine.get('tlfContacto').touched
  }

  get fallaNoValido(){
    return this.FormLine.get('falla').invalid && this.FormLine.get('falla').touched
  }

  get tipoFallaNoValido(){
    return this.FormLine.get('tipoFalla').invalid && this.FormLine.get('tipoFalla').touched
  }

  crearFormulario(){

    this.FormLine = this.formBuilder.group({
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
      duration: 3000,
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
      duration: 3000,
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
      duration: 3000,
      color: 'dark',
      position: 'top',
      animated: true,
      mode: "ios",
     
       
    });
    toast.present();
  }


   reportLine(event: Event){

      if(this.FormLine.invalid){return;}

      event.preventDefault();

      const datos = this.FormLine.value;
      console.log(this.FormLine.valid);
      console.log(this.FormLine.value);


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
                    //this.uiService.alertaInformativa(``);
                  }else{
                    //this.uiService.alertaInformativa('no tiene reporte');
                    this.presentToast(`${resp.mensaje}, por favor dirigirse a la página de consulta`)
                  }

                },(errorSer)=>{

                  this.presentToastError('Error 500:  Internal Server Error');
                })  
        
                
          this.FormLine.reset();
 


  };

};
