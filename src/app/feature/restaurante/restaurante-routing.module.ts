import { NgModule } from '@angular/core';
import { ListarRestauranteComponent } from './components/listar-restaurante/listar-restaurante.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListarRestauranteComponent,
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
