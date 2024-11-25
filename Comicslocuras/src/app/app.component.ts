import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from './services/servicebd.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  verMenu = true; //CY3rto  menu==true para afirmar la apertura de este  :v
  usuario: any;
  constructor(private router: Router, private bd:StorageService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkMenuVisibility(event.url);
      }
    });

    this.bd.fetchUsuario().subscribe(data=>{
      this.usuario = data;
    });
  }

  checkMenuVisibility(url: string) {

    // Ojo aqui abajo se señalan donde no se debe ver el menu o nos funaran
    const noveras = ['/login', '/registro', '/verperfil','/editarperfil', 
                    '/recuperarcontrase', '/cambiocontrase','/notfound','/registroventa'];

    this.verMenu = !noveras.includes(url);
  }

  cerrarsesion(){
    this.bd.listadoUsuario.next(null as any);
    //this.bd.login("null@null.cl","1234null");
    this.router.navigate(['/login'])
  }


  
  irCategoria(id_cat:number){
    
    switch (id_cat) {
      case 1:
        this.bd.seleccionarCrudCat(id_cat);
        this.router.navigate(['/comics']);
        break;
      case 2:
        this.bd.seleccionarCrudCat(id_cat);
        this.router.navigate(['/mangas']);
        break;
      case 3:
        this.bd.seleccionarCrudCat(id_cat);
        this.router.navigate(['/accesorios']);
        break;
      case 4:
        this.bd.seleccionarCrudCat(id_cat);
        this.router.navigate(['/peluches']);
        break;
      case 5:
        this.bd.seleccionarCrudCat(id_cat);
        this.router.navigate(['/funkopop']);
        break;
    }
  }
}
