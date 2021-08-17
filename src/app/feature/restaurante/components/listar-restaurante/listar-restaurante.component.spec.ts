import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Restaurante } from '@restaurante/shared/model/restaurante';
import { RestauranteService } from '@restaurante/shared/services/restaurante.service';
import { RouterTestingModule } from '@angular/router/testing';

import { ListarRestauranteComponent } from './listar-restaurante.component';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MesaService } from 'src/app/feature/mesa/shared/service/mesa.service';
import { DescuentoService } from 'src/app/feature/descuento/shared/services/descuento.service';

describe('ListarRestauranteComponent', () => {
  let component: ListarRestauranteComponent;
  let fixture: ComponentFixture<ListarRestauranteComponent>;
  let restauranteService: RestauranteService;

  const listaRestaurantes: Restaurante[] = [
    new Restaurante(1,'prueba 1', 10000),
    new Restaurante(2, 'prueba 2', 20000)
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRestauranteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        MatDialogModule
      ],
      providers: [RestauranteService, MesaService, DescuentoService, HttpService, MatDialog]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRestauranteComponent);
    component = fixture.componentInstance;
    restauranteService = TestBed.inject(RestauranteService);
    spyOn(restauranteService, 'consultar').and.returnValue(
      of(listaRestaurantes)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listarRestaurante.subscribe(resultado => {
      expect(resultado.length).toBe(2);
    });
  });
});
