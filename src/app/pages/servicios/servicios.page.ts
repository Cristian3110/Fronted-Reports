import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {

    this.reportsService.getReports().subscribe( resp =>{
      console.log(resp.ReportesTotales[0]);
    })


    this.reportsService.getReport('2123638940').subscribe (resp =>{
      console.log(resp);
    })
  }

}
