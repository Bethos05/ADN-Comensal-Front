import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Mesa } from '../model/mesa';

@Injectable()
export class MesaService {

  constructor(protected http: HttpService) {}

  public guardar(mesa: Mesa, nombreRestaurante: string){
    return this.http.doPost<Mesa, number>(`${environment.endpoint}/restaurantes/${nombreRestaurante}/addMesa`, mesa);
  }
}
