import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService  } from 'src/app/services/servicebd.service';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

 
  idcategoria: number = 0;
  nombre:string = "";
  precio: number = 0;
  stock: string = "";
  descripcion: string = "";
  foto: string = "";
  
  Crud: any;

  constructor(private router: Router, private activedrouter: ActivatedRoute, private bd:StorageService  ) {
    this.activedrouter.queryParams.subscribe(res=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.Crud = this.router.getCurrentNavigation()?.extras?.state?.['Crud'];
      }
    })
   }

  ngOnInit() {
  }

  modificar(){
    
    this.bd.modificarCrud(this.Crud.id, this.nombre, this.descripcion, this.foto, this.precio, this.idcategoria);
  
  }
}

