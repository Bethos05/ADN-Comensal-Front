import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog/dialog/dialog.component';
import { Observable } from 'rxjs';
import { CrearDescuentoComponent } from 'src/app/feature/descuento/components/crear-descuento/crear-descuento.component';
import { Descuento } from 'src/app/feature/descuento/shared/model/descuento';
import { DescuentoService } from 'src/app/feature/descuento/shared/services/descuento.service';
import { CrearMesaComponent } from 'src/app/feature/mesa/components/crear-mesa/crear-mesa.component';
import { Mesa } from 'src/app/feature/mesa/shared/model/mesa';
import { MesaService } from 'src/app/feature/mesa/shared/service/mesa.service';
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

  constructor(
    protected restauranteService: RestauranteService,
    private router: Router,
    private dialog: MatDialog,
    protected mesaService: MesaService,
    protected descuentoService: DescuentoService) { }

  ngOnInit(): void {
    this.listarRestaurante = this.restauranteService.consultar();
  }

  enviarInformacion(element: any){
    console.log(element);
    this.router.navigate(['/reservas/crear', {obj: JSON.stringify(element)}]);

  }

  public async crearMesa(nombreRestaurante: string){
    this.dialog.open(CrearMesaComponent, {
      disableClose: false,
      height: 'max-content',
      width: '40vh',
      data: {
        funcCommand: (identificador) => {
          this.mesaService.guardar(new Mesa(identificador), nombreRestaurante).subscribe(res => {
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
      },
    });
  }

  public async crearDescuento(nombreRestaurante: string){
    this.dialog.open(CrearDescuentoComponent, {
      disableClose: false,
      height: 'max-content',
      width: '40vh',
      data: {
        funcCommand: (data) => {
          console.log(data.codigo);
          this.descuentoService.guardar(new Descuento(data.codigo, data.valorDescuento), nombreRestaurante).subscribe(res => {
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
      },
    });
  }

}
