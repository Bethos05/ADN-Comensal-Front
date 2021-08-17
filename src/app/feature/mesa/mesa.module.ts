import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesaRoutingModule } from './mesa-routing.module';
import { CrearMesaComponent } from './components/crear-mesa/crear-mesa.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '@shared/shared.module';




@NgModule({
  declarations: [
    CrearMesaComponent
  ],
  imports: [
    CommonModule,
    MesaRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [],
})
export class MesaModule { }
