import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescuentoRoutingModule } from './descuento-routing.module';
import { CrearDescuentoComponent } from './components/crear-descuento/crear-descuento.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CrearDescuentoComponent
  ],
  imports: [
    CommonModule,
    DescuentoRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class DescuentoModule { }
