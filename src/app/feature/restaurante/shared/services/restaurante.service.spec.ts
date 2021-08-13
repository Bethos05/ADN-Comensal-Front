import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestauranteService } from './restaurante.service';
import { environment } from 'src/environments/environment';
import { HttpService } from '@core/services/http.service';
import { Restaurante } from '../model/restaurante';

describe('RestauranteService', () => {
  let httpMock: HttpTestingController;
  let service: RestauranteService;
  const apiEndpointRestaurante = `${environment.endpoint}/restaurantes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestauranteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(RestauranteService);
  });

  it('should be created', () => {
    const restauranteService: RestauranteService = TestBed.inject(RestauranteService);
    expect(restauranteService).toBeTruthy();
  });

  it('deberia listar restaurantes', () => {
    const dummyRestaurantes = [
      new Restaurante(1, 'prueba 1', 10000),
      new Restaurante(2, 'prueba 2', 20000)
    ];
    service.consultar().subscribe(restaurantes => {
      expect(restaurantes.length).toBe(2);
      expect(restaurantes).toEqual(dummyRestaurantes);
    });
    const req = httpMock.expectOne(apiEndpointRestaurante);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRestaurantes);
  });


});
