import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-verperfil',
  templateUrl: './verperfil.page.html',
  styleUrls: ['./verperfil.page.scss'],
})
export class VerPerfilPage implements OnInit {
  username: string = "";
  email: string = "";
  password: string = "";
  id_user!: number;
  imagen!: any;
  usuario!: any;
  //preguntaSeleccionada: string ="";
  //respuestaSeguridad: string="";

  constructor(
    private router: Router,
    private bd: StorageService,
    private storage: NativeStorage,
    private cdr: ChangeDetectorRef
  ) {
    
    this.bd.fetchUsuario().subscribe(data=>{
      this.usuario = data;
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.storage.getItem('Id').then((data: any) => {
      this.id_user = data;

      // Llamar a la consulta solo cuando se haya obtenido el ID
      this.bd.searchUserById(this.id_user).then((data: any) => {
        if (data) {
          this.username = data.nombre_u;
          this.email = data.correo_u;
          this.password = data.clave_u;
          this.imagen = data.foto_u;
          this.cdr.detectChanges();
        }
      });
    }).catch((error: any) => {
      console.error("Error retrieving user data", error);
    });
  }

  // Método para navegar a la página de edición con los datos del usuario
  editProfile() {
    const navigationExtras: NavigationExtras = {
      state: {
        user: {
          id_usuario: this.id_user,
          nombre_u: this.username,
          correo_u: this.email,
          clave_u: this.password,
          foto_u: this.imagen
        }
      }
    };
    this.router.navigate(['/editarperfil'], navigationExtras);
  }
}
