import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteRoutingModule } from './restaurante-routing.module';
import { ListarRestauranteComponent } from './components/listar-restaurante/listar-restaurante.component';
import { MaterialModule } from 'src/app/material.module';
import { RestauranteService } from './shared/services/restaurante.service';
import { RestauranteComponent } from './components/restaurante/restaurante.component';




@NgModule({
  declarations: [
    ListarRestauranteComponent,
    RestauranteComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule,
    MaterialModule
  ],
  providers: [RestauranteService]
})
export class RestauranteModule { }
