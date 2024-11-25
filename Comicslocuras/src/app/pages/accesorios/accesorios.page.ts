import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.page.html',
  styleUrls: ['./accesorios.page.scss'],
})
export class AccesoriosPage implements OnInit {
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
  }
}



