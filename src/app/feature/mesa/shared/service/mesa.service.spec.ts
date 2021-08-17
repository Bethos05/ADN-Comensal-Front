import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

import { MesaService } from './mesa.service';

describe('MesaService', () => {
  let httpMock: HttpTestingController;
  let service: MesaService;
  const apiEndpointMesas = `${environment.endpoint}/restaurantes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MesaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(MesaService);
    service = TestBed.inject(MesaService);
  });


  it('should be created', () => {
    const mesaService: MesaService = TestBed.inject(MesaService);
    expect(mesaService).toBeTruthy();
  });

  it('deberia crear una mesa', () => {
    const dummyMesa = {identificador: 'mesa 1'};

    service.guardar(dummyMesa, 'prueba').subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(`${apiEndpointMesas}/prueba/addMesa`);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

});
