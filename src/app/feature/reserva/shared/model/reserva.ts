export class Reserva {

    id: number;
    diaReserva: Date;
    nombreRestaurante: string;
    identificadorMesa: string;
    valorDescuento: number;
    precio: number;

    constructor(  id: number, diaReserva: Date, nombreRestaurante: string,
                  identificadorMesa: string, valorDescuento: number, precio: number){

        this.id = id;
        this.diaReserva = diaReserva;
        this.nombreRestaurante = nombreRestaurante;
        this.identificadorMesa = identificadorMesa;
        this.valorDescuento = valorDescuento;
        this.precio = precio;

    }


}