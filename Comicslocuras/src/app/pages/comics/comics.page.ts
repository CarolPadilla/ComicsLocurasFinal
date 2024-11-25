import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.page.html',
  styleUrls: ['./comics.page.scss'],
})
export class ComicsPage implements OnInit {

  productos: any;

  constructor(private router: Router, private bd: StorageService) {
    this.bd.fetchcrud().subscribe(res=>{
      this.productos = res;
    });
   }

  ngOnInit() {
    this.bd.fetchcrud().subscribe(res=>{
      this.productos = res;
    });
    console.log(JSON.stringify(this.productos));
   }

  // Función para manejar la compra de un producto
  vermasProducto(producto: any) {
    //redirigir los datos del producto a un html interior
    let navigationsextras: NavigationExtras = {
      state: {
        prod: producto
      }
    }
    this.router.navigate(['/detalleproducto'], navigationsextras);

    /*
    const productoSeleccionado = this.productos.find(producto => producto.id === id);
    if (productoSeleccionado) {
      console.log('Producto seleccionado:', productoSeleccionado);
      // Aquí puedes agregar la lógica de compra o navegación
    }*/
  }
}
