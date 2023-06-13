export class Reserva{
  user_id! : any;
  coche_id! : any;
  fecha_inicio! : Date;
  fecha_fin! : Date;
  precio_total! : Number;

  constructor(user_id: any, coche_id : any, fecha_inicio : any, fecha_fin : any, precio_total : any) {
    this.user_id = user_id;
    this.coche_id = coche_id;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.precio_total = precio_total;
  }
}
