import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { StorageService } from 'src/app/services/servicebd.service';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

 
  crud:any;
  // Lista de productos a editar
  ngOnInit(){
  
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    this.crud.imagen = image.webPath;
  
   
  };

  mensajeError: string = '';

  constructor(private router: Router, private activedrouter: ActivatedRoute,private alertController: AlertController, private bd: StorageService) {
    this.activedrouter.queryParams.subscribe(res=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.crud = this.router.getCurrentNavigation()?.extras?.state?.['crud'];
      }
    })

  }

  modificar(){
    this.bd.modificarCrud(this.crud.idcrud,this.crud.nombre, this.crud.descripcion,this.crud.imagen, this.crud.precio, this.crud.categoria);
  }

}
