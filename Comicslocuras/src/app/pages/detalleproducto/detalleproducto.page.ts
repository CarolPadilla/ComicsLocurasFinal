import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController
import { Carrito } from 'src/app/services/carrito';
import { StorageService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.page.html',
  styleUrls: ['./detalleproducto.page.scss'],
})
export class DetalleproductoPage implements OnInit {
  producto: any;
  cart: any[] = []; // Declaración del array cart
  usuario: any;
  carritoService: any;

  constructor(
    private router: Router,
    private activerouter: ActivatedRoute,
    private navCtrl: NavController, // Inyección de NavController
    private bd: StorageService,
    private cdr: ChangeDetectorRef
  ) {


    this.activerouter.paramMap.subscribe(params => {
      if (router.getCurrentNavigation()?.extras.state) {
        this.producto = router.getCurrentNavigation()?.extras?.state?.['prod'];
      }
    });
    this.bd.fetchUsuario().subscribe((data) => {
      this.usuario = data;
      if (this.usuario && this.usuario.id_usuario) {
        this.loadCarrito();  // Solo cargar el carrito si el usuario está disponible
      }
    });

    this.bd.fetchCarrito().subscribe((items) => {
      this.cart = items;
    });
  }

  ionViewDidEnter() {
    // Aquí actualizas la información cada vez que regresas a esta página
    this.loadCarrito();
    console.log('ionViewDidEnter llamado');
    console.log(this.cart.length);
  }

  ngOnInit() {
    //ESTO SE HIZO -------------------------------------------------
    this.loadCarrito();
    //this.cdr.detectChanges();
    //ESTO SE HIZO -------------------------------------------------
    if (this.cart.length === 0) {
      this.bd.fetchCarrito().subscribe((items) => {
        this.cart = items;
      });
      console.log(this.cart);
    }

    //ESTO SE HIZO -------------------------------------------------
    this.bd.fetchUsuario().subscribe((data) => {
      this.usuario = data;

    });
  }

  //ESTO SE HIZO -------------------------------------------------
  loadCarrito() {
    if (this.usuario && this.usuario.id_usuario) {
      console.log('ID de usuario:', this.usuario.id_usuario); // Verifica que el id_usuario esté presente
      this.bd.seleccionarCarrito(this.usuario.id_usuario).subscribe({
        next: (items) => {
          if (items.length === 0) {
            this.cart = items || [];  // Asegurarse de que `cart` siempre sea un array
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

  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.nombre === product.nombre);
    if (existingProduct) {
      // Actualizar la cantidad si ya existe
      this.bd.updateCantidad(existingProduct.id_carrito);
      this.loadCarrito();  // Recargar el carrito después de la actualización
    } else {
      // Insertar el producto si no existe
      this.cart.push({ ...product, quantity: 1 });
      console.log(JSON.stringify(this.usuario));
      this.bd.insertarCarrito(this.usuario.id_usuario, 1, product.nombre, product.precio, product.imagen, product.descripcion);
      this.loadCarrito();  // Recargar el carrito después de la inserción
    }
  }

  //ESTOOO HAY QUE VEEEER-------------------
  // Eliminar producto del carrito
  removeFromCart(producto: any) {
    this.loadCarrito();
    const existingProducto = this.cart.find(item => item.nombre === producto.nombre);
    this.bd.updateCarrito(existingProducto.id_carrito);
    this.loadCarrito();
  }

  //ESTOOO HAY QUE VEEEER-------------------
  // Vaciar el carrito
  clearCart() {
    this.loadCarrito();
    const userId = this.usuario.id_usuario;
    this.bd.updateAllCarrito(userId);
    this.loadCarrito();
  }

  // Navegar al carrito de compras
  goToCart() {
    this.loadCarrito();
    this.router.navigate(['/carritocompras'], {
      state: { cart: this.cart } // Pasa el carrito al navegar
    });
  }
}
