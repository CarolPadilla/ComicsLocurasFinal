import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { StorageService } from '../services/servicebd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  //productos: any;
  categorias: any;
  id_cat: any;
  usuario: any;
  usuario2: any;

  constructor(private bd:StorageService, private router: Router) {
    
    this.bd.fetchCategoria().subscribe(res=>{
      this.categorias = res;
    });

    this.bd.fetchUsuario().subscribe(data=>{
      this.usuario = data;
    });

  }
  ngOnInit() {
    this.bd.fetchCategoria().subscribe(res=>{
      this.categorias = res;
    });

    this.bd.fetchUsuario().subscribe(data=>{
      this.usuario = data;
    });

    
  }

  irCategoria(manga:any){
    this.id_cat = manga.id_categoria;
    
    switch (this.id_cat) {
      case 1:
        this.bd.seleccionarCrudCat(this.id_cat);
        this.router.navigate(['/comics']);
        break;
      case 2:
        this.bd.seleccionarCrudCat(this.id_cat);
        this.router.navigate(['/mangas']);
        break;
      case 3:
        this.bd.seleccionarCrudCat(this.id_cat);
        this.router.navigate(['/accesorios']);
        break;
      case 4:
        this.bd.seleccionarCrudCat(this.id_cat);
        this.router.navigate(['/peluches']);
        break;
      case 5:
        this.bd.seleccionarCrudCat(this.id_cat);
        this.router.navigate(['/funkopop']);
        break;
    }
  }
}
