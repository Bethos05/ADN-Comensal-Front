import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ReservaRoutingModule } from './reserva-routing.module';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { MaterialModule } from 'src/app/material.module';
import { ReservaService } from './shared/service/reserva.service';
import { ReservaComponent } from './components/reserva/reserva.component';
import { SharedModule } from '@shared/shared.module';
import localeCo from '@angular/common/locales/es-CO';
registerLocaleData(localeCo, 'es-CO');



@NgModule({
  declarations: [
    CrearReservaComponent,
    ListarReservaComponent,
    ReservaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [ReservaService]
})
export class ReservaModule { }
