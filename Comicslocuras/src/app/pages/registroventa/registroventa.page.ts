import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registroventa',
  templateUrl: './registroventa.page.html',
  styleUrls: ['./registroventa.page.scss'],
})
export class RegistroventaPage implements OnInit {
 // Objeto que almacena los datos de la venta
  venta = {
    nombreProducto: '',
    cantidad: null,
    precio: null,
    fecha: ''
  };

  constructor() { }
 // Método que se ejecuta al inicializar el componente
  ngOnInit() {
  }

  registrarVenta() {
    // Aquí podrías añadir lógica para manejar el registro de ventas,
    // como enviarlo a un servidor o guardarlo en una base de datos.
    console.log('Venta registrada:', this.venta);

    // Limpiar el formulario después del registro
    this.venta = {
      nombreProducto: '',
      cantidad: null,
      precio: null,
      fecha: ''
    };
  }
}
