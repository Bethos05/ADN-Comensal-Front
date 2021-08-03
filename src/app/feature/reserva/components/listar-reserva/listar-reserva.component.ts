import { Component, OnInit } from '@angular/core';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {

  public listarReservas: Observable<Reserva[]>;
  displayedColumns: string[] = ['id', 'dia_reserva', 'nombre_restaurante', 'identificador_mesa', 'valor_descuento', 'precio'];
  dataSource: any;

  constructor(protected reservaService: ReservaService) { }

  ngOnInit(): void {
    this.listarReservas = this.reservaService.consultar();
  }

}
