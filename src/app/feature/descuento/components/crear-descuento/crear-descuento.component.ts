import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-descuento',
  templateUrl: './crear-descuento.component.html',
  styleUrls: ['./crear-descuento.component.css']
})
export class CrearDescuentoComponent implements OnInit {

  descuentoForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CrearDescuentoComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      funcCommand: Function;
    }
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.descuentoForm = new FormGroup({
      codigo: new FormControl('', [Validators.required]),
      valorDescuento: new FormControl(0, [Validators.required, Validators.min(0)])
    });
  }

  crearDescuento(){
    console.log({
      codigo: this.descuentoForm.get('codigo').value,
      valorDescuento: this.descuentoForm.get('valorDescuento').value
    });
    this.data?.funcCommand(this.descuentoForm.value);
    this.dialogRef.close();
  }
}
