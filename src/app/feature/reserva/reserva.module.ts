import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaRoutingModule } from './reserva-routing.module';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    CrearReservaComponent,
    ListarReservaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    MaterialModule
  ]
})
export class ReservaModule { }
