import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Descuento } from '../model/descuento';

@Injectable()
export class DescuentoService {

  constructor(protected http: HttpService) { }

  public guardar(descuento: Descuento , nombreRestaurante: string){
    console.log(descuento);
    return this.http.doPost<Descuento, number>(`${environment.endpoint}/restaurantes/${nombreRestaurante}/addDescuento`, descuento);
  }
}
