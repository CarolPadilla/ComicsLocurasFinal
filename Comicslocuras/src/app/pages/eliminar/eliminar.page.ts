import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {
  arreglocrud: any = [
    {
      id: '',
      nombre: '',
      descripcion: '',
      imagen:'',
      precio:'',
      categoria:''
    }
  ]
  constructor( private router:Router, private bd: StorageService) { }

  ngOnInit() {
    this.bd.dbState().subscribe(data=>{
      //validar si la bd esta lista
      if(data){
        //subscribir al observable de la listaNoticias
        this.bd.fetchcrud().subscribe(res=>{
          this.arreglocrud = res;
        })
      }
    })
  }
  modificar(x:any){
    let navigationsExtras: NavigationExtras = {
      state: {
        crud: x
      }
    }
    this.router.navigate(['/editar'], navigationsExtras);

  }
  eliminar(x:any){
    this.bd.eliminarCrud(x.idcrud);
  }

  agregar(){
    this.router.navigate(['/agregar']);
  }
}
