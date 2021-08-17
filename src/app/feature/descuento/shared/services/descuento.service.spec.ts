import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

import { DescuentoService } from './descuento.service';

describe('DescuentoService', () => {
  let httpMock: HttpTestingController;
  let service: DescuentoService;
  const apiEndpointDescuentos = `${environment.endpoint}/restaurantes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DescuentoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(DescuentoService);
    service = TestBed.inject(DescuentoService);
  });


  it('should be created', () => {
    const descuentoService: DescuentoService = TestBed.inject(DescuentoService);
    expect(descuentoService).toBeTruthy();
  });

  it('deberia crear un descuento', () => {
    const dummyDescuento = {
      codigo: 'codigo',
      valorDescuento: 50000
    };

    service.guardar(dummyDescuento, 'prueba').subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(`${apiEndpointDescuentos}/prueba/addDescuento`);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });

});
