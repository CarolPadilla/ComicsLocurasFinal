import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importa AlertController
import { Carrito } from 'src/app/services/carrito';
import { StorageService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.page.html',
  styleUrls: ['./carritocompras.page.scss'],
})
export class CarritoComprasPage implements OnInit {
  cart: any[] = []; // Inicialización del carrito
  carritoService: any;
  usuario: any;

  constructor(
    private bd: StorageService,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController // Inyecta AlertController
  ) {this.bd.fetchUsuario().subscribe(data => {
    this.usuario = data;
  });

  this.bd.fetchCarrito().subscribe((items) => {
    this.cart = items;
  });}

  ngOnInit() {
    this.loadCarrito();
    this.bd.fetchUsuario().subscribe((data) => {
      this.usuario = data;
    });
  }

  removeFromCart(producto: any) {
    this.loadCarrito();
    const existingProducto = this.cart.find(item => item.nombre === producto.nombre);
    this.bd.updateCarrito(existingProducto.id_carrito);
    this.loadCarrito();
  }

  clearCart() {
    this.loadCarrito();
    const userId = this.usuario.id_usuario;
    this.bd.updateAllCarrito(userId);
    this.loadCarrito();
  }

  getTotal() {
    return this.cart.reduce((acc, product) => acc + (product.precio * (product.quantity || 1)), 0);
  }

  goToCart() {
    this.router.navigate(['/carritocompras'], {
      state: { cart: this.cart } // Pasa el carrito al navegar
    });
  }

  // Función para mostrar la alerta de compra exitosa
  async finalizarCompra() {
    const alert = await this.alertController.create({
      header: 'Compra exitosa',
      message: 'Gracias por su compra',
      buttons: ['OK']
    });

    await alert.present();
    
    // Después de mostrar la alerta, limpiar el carrito
    this.clearCart();
  }

  loadCarrito() {
    if (this.usuario && this.usuario.id_usuario) {
      console.log('ID de usuario:', this.usuario.id_usuario); 
      this.bd.seleccionarCarrito(this.usuario.id_usuario).subscribe({
        next: (items) => {
          if (items.length === 0) {
            this.cart = [];
            console.log('El carrito está vacío.');
          } else {
            this.cart = items;
            console.log('Carrito cargado:', items);
          }
        },
        error: (err) => {
          console.error('Error al cargar el carrito:', err);
        },
        complete: () => {
          console.log('Carga del carrito completa');
        }
      });
    }
  }
}
