import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { Validators, FormControl } from '@angular/forms';





@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  

  abonado = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$'),]);

    constructor( private reportService: ReportsService,
                   ) {

                  
                  }

  ngOnInit() {
  }


  queryAbonado(event: Event){

    if(this.abonado.invalid){return;}

    event.preventDefault();

      console.log(this.abonado.value);
      const abonado = this.abonado.value;

      this.reportService.getReport(abonado).subscribe(resp =>{
        console.log(resp);
      })


    }






  }

 
