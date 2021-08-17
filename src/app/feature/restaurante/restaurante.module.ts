import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteRoutingModule } from './restaurante-routing.module';
import { ListarRestauranteComponent } from './components/listar-restaurante/listar-restaurante.component';
import { MaterialModule } from 'src/app/material.module';
import { RestauranteService } from './shared/services/restaurante.service';
import { RestauranteComponent } from './components/restaurante/restaurante.component';
import { CrearRestauranteComponent } from './components/crear-restaurante/crear-restaurante.component';
import { SharedModule } from '@shared/shared.module';
import { MesaService } from '../mesa/shared/service/mesa.service';
import { DescuentoService } from '../descuento/shared/services/descuento.service';



@NgModule({
  declarations: [
    ListarRestauranteComponent,
    RestauranteComponent,
    CrearRestauranteComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [RestauranteService, MesaService, DescuentoService]
})
export class RestauranteModule { }
