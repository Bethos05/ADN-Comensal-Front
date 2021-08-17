import { NgModule } from '@angular/core';
import { ListarRestauranteComponent } from './components/listar-restaurante/listar-restaurante.component';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from './components/restaurante/restaurante.component';
import { CrearRestauranteComponent } from './components/crear-restaurante/crear-restaurante.component';

const routes: Routes = [
  {
    path: '',
    component: RestauranteComponent,
    children: [
      {
        path: 'listar',
        component: ListarRestauranteComponent
      },
      {
        path: 'crear',
        component: CrearRestauranteComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
