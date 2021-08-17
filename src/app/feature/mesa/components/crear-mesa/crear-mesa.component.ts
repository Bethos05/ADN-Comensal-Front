import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-crear-mesa',
  templateUrl: './crear-mesa.component.html',
  styleUrls: ['./crear-mesa.component.css']
})
export class CrearMesaComponent implements OnInit {

  mesaForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CrearMesaComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      funcCommand: Function;
    }
    ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  public crearMesa() {
    this.data?.funcCommand(this.mesaForm.value.identificador);
    this.dialogRef.close();
  }


  crearFormulario() {
    this.mesaForm = new FormGroup({
      identificador: new FormControl('', [Validators.required])
    });
  }

}
