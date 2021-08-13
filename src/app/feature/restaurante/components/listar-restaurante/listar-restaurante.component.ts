import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurante } from '../../shared/model/restaurante';
import { RestauranteService } from '../../shared/services/restaurante.service';

@Component({
  selector: 'app-listar-restaurante',
  templateUrl: './listar-restaurante.component.html',
  styleUrls: ['./listar-restaurante.component.css']
})
export class ListarRestauranteComponent implements OnInit {

  public listarRestaurante: Observable<Restaurante[]>;
  displayedColumns: string[] = ['id', 'nombre', 'precio_reserva', 'acciones'];

  constructor(protected restauranteService: RestauranteService, private router: Router) { }

  ngOnInit(): void {
    this.listarRestaurante = this.restauranteService.consultar();
  }

  enviarInformacion(element: any){
    console.log(element);
    this.router.navigate(['/reservas/crear', {obj: JSON.stringify(element)}]);

  }

}
