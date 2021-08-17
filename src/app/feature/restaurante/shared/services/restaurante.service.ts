import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Restaurante } from '../model/restaurante';

@Injectable()
export class RestauranteService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Restaurante[]>(`${environment.endpoint}/restaurantes`, this.http.optsName('consultar restaurantes'));
  }

  public guardar(restaurante: any){
    return this.http.doPost<any, number>(`${environment.endpoint}/restaurantes`, restaurante);
  }

}
