import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { Validators, FormControl } from '@angular/forms';
import { UiServiceService } from '../../services/ui-service.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  ticket: any;

  abonado = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$'),]);

    constructor( private reportService: ReportsService,
                 private toastCtrl: ToastController
                   ) {

                  
                  }

  ngOnInit() { }

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
 


  queryAbonado(event: Event){

    if(this.abonado.invalid){return;}

    event.preventDefault();

      console.log(this.abonado.value);
      const abonado = this.abonado.value;

    const valido =  this.reportService.getReport(abonado).subscribe((resp:any) =>{
        console.log(resp);

          this.ticket = resp;
       

          if ( resp['ok'] ){
            this.presentToastOK(`Abonado: ${this.ticket.Reporte.abonado} bajo el código ${this.ticket.Reporte._id} creado en fecha: ${this.ticket.Reporte.created}`)
          
          }else{
            
            this.presentToast(`${this.ticket.mensaje}`)
          }
     
        

      },( errorSer)=>{
        console.log(errorSer);
       
        this.presentToastError(`${errorSer.name}`)
      });

      this.abonado.reset();
      
    }






  }

 
