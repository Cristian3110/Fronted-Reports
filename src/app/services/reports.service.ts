import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  // inicianizandola
  
  paginaReports = 0;

  constructor( private http: HttpClient) { }

// Método a futuro para cuando se realice el dashboard del servicio
  getReports(){

    this.paginaReports ++;
    return this.http.get(`${URL}/reportes/?pagina=${this.paginaReports}`);
  }

  

}
