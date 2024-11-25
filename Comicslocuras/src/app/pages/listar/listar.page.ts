import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  arregloCrud: any = [
    {
      id_producto: '',
      nombre_p: '',
      precio_p: '',
      stock: '',
      descripcion: '',
      foto_p: '',
    }
  ];

  constructor(private bd: StorageService, private router: Router) { }

  ngOnInit() {
    this.bd.dbState().subscribe(data => {
      // Validar si la BD está lista
      if (data) {
        // Subscribir al observable de la listaNoticias
        this.bd.fetchcrud().subscribe(res => {
          this.arregloCrud = res;
        });
      }
    });
  }

  modificar(x: any) {
    let navigationsExtras: NavigationExtras = {
      state: {
        Crud: x
      }
    };
    this.router.navigate(['/modificar'], navigationsExtras);
  }

  eliminar(x: any) {
    this.bd.eliminarCrud(x.id);  // Cambié `x.idnoticia` por `x.id`
  }

  agregar() {
    this.router.navigate(['/agregar']);
  }
}

