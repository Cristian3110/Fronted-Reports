import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
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
              private uiService: UiServiceService,
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


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 10000,
      color: 'dark',
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
                
              if(valido){

                this.presentToast(`Su reporte con número de abonado: ${resp.abonado} se ha generado correctamente bajo el código: ${resp._id}`);

              } else {
                
                this.presentToast(' Este número de abonado ya tiene un reporte creado, pruebe en la paǵina de consulta');
              }



              })  
      
            
       
        this.FormInter.reset();
    
        
   


};

}
