//import { Component, OnInit } from '@angular/core';
//import { AlertController } from '@ionic/angular';
//import { Camera, CameraResultType } from '@capacitor/camera';
//import { StorageService } from 'src/app/services/servicebd.service';


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//AGREGAR
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//@Component({
  //selector: 'app-agregar',
  //templateUrl: './agregar.page.html',
  //styleUrls: ['./agregar.page.scss'],
//})
//export class AgregarPage implements OnInit {
 
  //id: string = "";
  //nombre:string = "";
  //precio: string = "";
  //stock: string = "";
  //descripcion: string = "";
  //imagen: string = "";

  //constructor(private alertCtrl: AlertController, private bd:StorageService) {}

  //constructor(private bd: StorageService,private alertCtrl: AlertController) { }




  //ngOnInit(): void {
    // Aquí puedes agregar lógica de inicialización si es necesario
  //}



  //async agregarProducto() {
    // Obtenemos los valores de los campos
    //const nombre = (document.querySelector('ion-input[name="nombre"]') as HTMLInputElement).value;
    //const descripcion = (document.querySelector('ion-textarea[name="descripcion"]') as HTMLTextAreaElement).value;
    //const imagen = (document.querySelector('ion-input[name="imagen"]') as HTMLInputElement).value;
    //const pagina = (document.querySelector('ion-select[name="pagina"]') as HTMLSelectElement).value;

    // Validamos los campos
    //if (!nombre || !descripcion || !imagen || !pagina || !/^https?:\/\//.test(imagen)) {
      //const alert = await this.alertCtrl.create({
       // header: 'Error',
        //message: 'Por favor completa todos los campos correctamente. Asegúrate de que la URL de la imagen sea válida.',
        //buttons: ['OK'],
      //});
      //await alert.present();
     // return;
    //}else{
      //const alert = await this.alertCtrl.create({
        //header: 'Éxito',
        //message: 'Producto agregado correctamente',
        //buttons: ['OK'],
      //});
      //await alert.present();
      //this.bd.insertarCrud(this.id, this.nombre, this.precio, this.stock, this.descripcion, this.imagen);
      
    //}

    //async takePicture() {
      //const image = await Camera.getPhoto({
       // quality: 90,
       // allowEditing: true,
       // resultType: CameraResultType.Uri
    //  });
  
    //  var imageUrl = image.webPath;
   // }
   
    

    // Lógica para agregar el producto...

    
  //}
//}


import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Asegúrate de que esta ruta sea correcta
import { Camera, CameraResultType } from '@capacitor/camera';
import { StorageService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {
  nombre: string = '';
  descripcion: string = '';
  precio!: number;
  imagen: any;
  categoria!: number;
  mensajeError: string = '';

  categorias: any;

  constructor(private alertController: AlertController, private bd: StorageService) {
    //this.bd.seleccionarCategoria();
    this.bd.fetchCategoria().subscribe(res=>{
      this.categorias = res;
    });
  }

  validarPrecio(event: any) {
    const valor = event.target.value;

    // Validación del precio
    if (!/^\d*\.?\d+$/.test(valor)) {
      this.mensajeError = 'Solo se permiten números';
    } else if (parseFloat(valor) < 1000) {
      this.mensajeError = 'El precio no puede ser menor a 1000';
    } else if (!/^\d+(\.\d{1,2})?$/.test(valor)) {
      this.mensajeError = 'Solo se permiten dos decimales';
    } else {
      this.mensajeError = '';
    }
  }

  // Validación de que los campos estén llenos para poder agregar
  async presentAlert() {
    if (!this.nombre || !this.descripcion || !this.precio || !this.imagen || !this.categoria || this.mensajeError) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Todos los campos son obligatorios ',
        buttons: ['Volver'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'El producto fue agregado exitosamente.',
        buttons: ['OK'],
      });
      await alert.present();
      this.bd.insertarCrud(this.nombre, this.descripcion,this.imagen,this.precio, this.categoria);

    }
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });

    this.imagen = image.webPath; // Asegúrate de guardar la ruta de la imagen
  };
}
