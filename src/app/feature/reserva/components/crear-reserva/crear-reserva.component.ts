
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { DialogComponent } from '@shared/components/dialog/dialog/dialog.component';




@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {

  formReserva: FormGroup;
  public restaurante: any;
  selectedValue: string;

  constructor(protected reservaServicio: ReservaService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.restaurante = JSON.parse(this.route.snapshot.params.obj);
    this.construirFormulario();
  }

  private construirFormulario(){
    this.formReserva = new FormGroup({
      mesa: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      codigo: new FormControl(''),
    });
  }

  crear(){

    const body = {
      diaReserva: `${formatDate(
      this.formReserva.get('fecha')?.value,
      'yyyy-MM-dd',
      'es-CO',
      'UTC'
    )}`,
    restaurante: this.restaurante,
    mesa: {identificador: this.selectedValue, nombreRestaurante: this.restaurante.nombre},
    codigo: this.formReserva.get('codigo')?.value,
    precio: this.restaurante.precioReserva};

    console.log(body);

    this.reservaServicio.guardar(body).subscribe(res => {
      console.log(res);
      this.router.navigate(['/reservas/listar']);
    }, err => {
      console.log(err);
      if (err.error.nombreExcepcion && err.error.mensaje){
        const titleSeparated = err.error.nombreExcepcion.replace(/([a-z](?=[A-Z]))/g, '$1 ');
        this.dialog.open(DialogComponent, { data: { title: titleSeparated, content: err.error.mensaje}});
        console.log(err.error.mensaje);
      }
    }
    );
  }

}
