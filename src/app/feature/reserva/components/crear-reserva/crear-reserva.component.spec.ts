import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { MaterialModule } from 'src/app/material.module';
import localeCo from '@angular/common/locales/es-CO';

import { CrearReservaComponent } from './crear-reserva.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('CrearReservaComponent', () => {
  let component: CrearReservaComponent;
  let fixture: ComponentFixture<CrearReservaComponent>;
  let reservaService: ReservaService;
  const restaurante = {
    id: 1,
    nombre: 'NOMBRE',
    precioReserva: 100000,
    mesas: [
        {
            identificador: 'mesa1'
        }
    ],
    descuentos: [
        {
            codigo: 'codigo',
            valorDescuento: 20000
        }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearReservaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [ReservaService, HttpService, {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            params: {obj: JSON.stringify(restaurante)},
          },
        },
      }]
    })
    .compileComponents();
    registerLocaleData(localeCo, 'es-CO');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'guardar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.formReserva.valid).toBeFalsy();
  });

  it('Registrando reserva', () => {
    expect(component.formReserva.valid).toBeFalsy();
    component.formReserva.controls.mesa.setValue('mesa 1');
    component.formReserva.controls.fecha.setValue('2021-08-20T00:00:00Z');
    component.formReserva.controls.codigo.setValue('codigo');
    expect(component.formReserva.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
    reservaService.guardar(component.formReserva.value).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
  });


});


