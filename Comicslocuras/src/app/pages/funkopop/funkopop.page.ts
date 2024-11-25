import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-funkopop',
  templateUrl: './funkopop.page.html',
  styleUrls: ['./funkopop.page.scss'],
})
export class FunkopopPage implements OnInit {
  // Arreglo contiene la lista de productos Funkopop
  productos: any;

  //se agregaron cosas
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

  }
}
