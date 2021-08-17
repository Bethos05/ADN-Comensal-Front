import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { RestauranteService } from '@restaurante/shared/services/restaurante.service';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';

import { CrearRestauranteComponent } from './crear-restaurante.component';

describe('CrearRestauranteComponent', () => {
  let component: CrearRestauranteComponent;
  let fixture: ComponentFixture<CrearRestauranteComponent>;
  let restauranteService: RestauranteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRestauranteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [RestauranteService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRestauranteComponent);
    component = fixture.componentInstance;
    restauranteService = TestBed.inject(RestauranteService);
    spyOn(restauranteService, 'guardar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.restauranteForm.valid).toBeFalsy();
  });

  it('Registrando envio', () => {
    expect(component.restauranteForm.valid).toBeFalsy();
    component.restauranteForm.controls.nombre.setValue('prueba');
    component.restauranteForm.controls.precioReserva.setValue(987654321);
    expect(component.restauranteForm.valid).toBeTruthy();

    component.crearRestaurante();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
    restauranteService.guardar(component.restauranteForm.value).subscribe((respuesta) => {
      expect(respuesta).toEqual(1);
    });
  });


});
