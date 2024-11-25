import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  //Propiedades existentes
    nombre: string = '';
    email: string = '';
    contrasena: string = '';
    repetirContrasena: string = '';
    pregunta: string = '';
    respuesta: string ='';


    //Lista de preguntas disponibles
    preguntasSeguridad = [
      '¿Cuál es tu color favorito?',
      '¿Estacion favorita del año?',
      '¿Cuál es el tu apodo de pequeño?',
      '¿Cuál es la edad de tu padre?',
      '¿En que año terminaste secundaria?'
    ];

  constructor(private router: Router, private alertController: AlertController, private bd: StorageService) {}

  ngOnInit() {}

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

  registrar() {
    if (this.formularioValido()) {
      this.bd.insertarUsuario(
        this.nombre,
        this.email,
        this.contrasena,
        this.pregunta,
        this.respuesta
      );
      this.router.navigate(['/login']);
      //this.bd.presentAlert('2', this.pregunta)
      //this.bd.presentAlert('3', this.respuesta)
      
    } else {
      this.mostrarAlerta('Por favor, revisa los campos marcados en rojo e intenta de nuevo.');
    }
  }

  validarEmail(email: string): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  validarContrasena(contrasena: string): boolean {
    const longitudValida = contrasena.length >= 6 && contrasena.length <= 16;
    const contieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);
    return longitudValida && contieneCaracterEspecial;
  }

  formularioValido(): boolean {
    return (
      this.nombre.trim() !== '' &&
      this.validarEmail(this.email) &&
      this.validarContrasena(this.contrasena) &&
      this.contrasena === this.repetirContrasena &&
      this.pregunta !== '' &&
      this.respuesta.trim() !== ''
    );
  }
}