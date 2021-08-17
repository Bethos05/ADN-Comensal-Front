import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RestauranteService } from '@restaurante/shared/services/restaurante.service';
import { DialogComponent } from '@shared/components/dialog/dialog/dialog.component';

@Component({
  selector: 'app-crear-restaurante',
  templateUrl: './crear-restaurante.component.html',
  styleUrls: ['./crear-restaurante.component.css']
})
export class CrearRestauranteComponent implements OnInit {

  restauranteForm: FormGroup;

  constructor(protected restauranteService: RestauranteService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  crearRestaurante(){

    const body = {
      ...this.restauranteForm.value,
      mesas: []
    };

    this.restauranteService.guardar(body).subscribe(res => {
      console.log(res);
      this.router.navigate(['restaurantes/listar']);
    }, err => {
      console.log(err);
      if (err.error.nombreExcepcion && err.error.mensaje){
        const titleSeparated = err.error.nombreExcepcion.replace(/([a-z](?=[A-Z]))/g, '$1 ');
        this.dialog.open(DialogComponent, { data: { title: titleSeparated, content: err.error.mensaje}});
        console.log(err.error.mensaje);
      }
    });
  }



  construirFormulario() {
   this.restauranteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      precioReserva: new FormControl(0, [Validators.required, Validators.min(0)])
    });
  }

}
