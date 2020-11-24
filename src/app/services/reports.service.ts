import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Reporte, RespuestaReportes } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';


import {map} from 'rxjs/operators'

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ReportsService {




  // inicianizandola
  
  paginaReports = 0;
  
  constructor( private http: HttpClient,
               private usuarioService: UsuarioService) { }
  
  // Método a futuro para cuando se realice el dashboard del servicio
  getReports(){
  
    this.paginaReports ++;
    return this.http.get<RespuestaReportes>(`${URL}/reportes/?pagina=${this.paginaReports}`);
  };


  
  // Petición de los reportes por Abonado
  
  getReport(id: number){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token

    });
    
  return this.http.get<Reporte>(`${URL}/reportes/consulta/${id}`, {headers});

  };
  
  
  
  crearReportsLine(_id: string, nombre: string,
         abonado: number,
         email:string, 
         tlfContacto: number,
         falla: string,
         tipoFalla: string){
  
           const data = {_id, nombre, abonado, email, tlfContacto, falla, tipoFalla};
            
          const headers = new HttpHeaders({
              'x-token': this.usuarioService.token

            });

            // Este es el código original 
             return this.http.post<Reporte>(`${URL}/reportes`, data, {headers})
               


           };
                              

}




