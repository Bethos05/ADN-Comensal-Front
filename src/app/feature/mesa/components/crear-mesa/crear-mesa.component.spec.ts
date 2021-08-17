import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { MesaService } from '../../shared/service/mesa.service';

import { CrearMesaComponent } from './crear-mesa.component';

describe('CrearMesaComponent', () => {
  let component: CrearMesaComponent;
  let fixture: ComponentFixture<CrearMesaComponent>;
  let mesaService: MesaService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        MesaService,
        HttpService
      ],
      declarations: [ CrearMesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMesaComponent);
    component = fixture.componentInstance;
    mesaService = TestBed.inject(MesaService);
    spyOn(mesaService, 'guardar').and.returnValue(
      of(1)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.mesaForm.valid).toBeFalsy();
  });

});
