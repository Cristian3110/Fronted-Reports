import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { ReportsService } from '../../services/reports.service';



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
               private uiService: UiServiceService,
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

   reportLine(event: Event){

      event.preventDefault();

      const datos = this.FormLine.value;
      console.log(this.FormLine.valid);
      console.log(this.FormLine.value);


      const postReport = this.reportsService.crearReportsLine(datos.name,
                                                      datos.abonado, 
                                                      datos.email, 
                                                      datos.tlfContacto, 
                                                      datos.falla, 
                                                      datos.tipoFalla);  
        
          if (this.FormLine.valid){
            console.log(postReport)
          }else{
            console.log('Ya este abonado tiene un reporte creado')
          };


          this.FormLine.reset();
      
          console.log(postReport);
     


  };




};
