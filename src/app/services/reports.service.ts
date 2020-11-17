import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaReportes, Reporte } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';



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
  }
  
  // Petición de los reportes por Abonado
  
  getReport(id: string){
    
  return this.http.get<Reporte>(`${URL}/reportes/consulta/${id}`);
  }
  
  
  
  crearReportsLine(nombre: string,
         abonado: number,
         email:string, 
         tlfContacto: number,
         falla: string,
         tipoFalla: string){
  
           const data = {nombre, abonado, email, tlfContacto, falla, tipoFalla};
            
          const headers = new HttpHeaders({
              'x-token': this.usuarioService.token

            });

             this.http.post<Reporte>(`${URL}/reportes`, data, {headers})
                 .subscribe(resp=>{
                   console.log(resp); // solo para visualizar que se esta creando el reporte
                  
                 })
                
                
               


           }
                              

}




