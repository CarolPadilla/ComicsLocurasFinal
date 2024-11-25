import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/servicebd.service';
import { Usuario } from 'src/app/services/usuario';


@Component({
  selector: 'app-recuperarcontrase',
  templateUrl: './recuperarcontrase.page.html',
  styleUrls: ['./recuperarcontrase.page.scss'],
})

export class RecuperaContraPage {
  paso: number = 1;
  email: string = ''; // Propiedad para almacenar el correo electrónico ingresado
  preguntaSeguridad: string = ''; // Propiedad para almacenar la pregunta de seguridad
  respuestaUsuario: string = ''; // Propiedad para almacenar la respuesta de la pregunta de seguridad
  nuevaContrasena: string = '';
  confirmarContrasena: string = '';
  usuarioEncontrado: any = null;
  preguntaSeleccionada: string = '';


  


  preguntasSeguridad = [
      '¿Cuál es tu color favorito?',
      '¿Estacion favorita del año?',
      '¿Cuál es el tu apodo de pequeño?',
      '¿Cuál es la edad de tu padre?',
      '¿En que año terminaste secundaria?'
  ];

  compararpreguntas(): boolean {
    return this.preguntaSeguridad === this.preguntaSeleccionada;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'RECUPERACION DE CONTRASEÑA ',
      message: 'Por favor ingresa un correo electrónico.',
      buttons: ['ok'],
    });

    await alert.present();
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'RECUPERACION DE CONTRASEÑA ',
      message: 'Enlace de recuperación enviado',
      buttons: ['ok'],
    });

    await alert.present();
  }

  constructor(private alertController: AlertController, private bd: StorageService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() { }

  async buscarUsuario() {
    if (!this.email) {
      await this.mostrarAlerta('Error', 'Por favor ingrese un correo electrónico');
      return;
    }

    try {
      const usuario = await this.bd.buscarUsuarioPorCorreo(this.email);
      console.log('Usuario encontrado:', usuario); // Debug log
      
      if (usuario) {
          this.usuarioEncontrado = usuario;
          this.preguntaSeguridad = usuario.preguntaSeleccionada;
          console.log('Pregunta de seguridad:', this.preguntaSeguridad);
          this.paso = 2;
          this.cdr.detectChanges();
          console.log(this.paso);
      } else {
        await this.mostrarAlerta('Error', 'Usuario no encontrado');
      }
    } catch (error) {
      console.error('Error al buscar usuario:', error);
      await this.mostrarAlerta('Error', 'Ocurrió un error al buscar el usuario');
    }
  }

  async verificarRespuesta() {
    if (!this.respuestaUsuario) {
      await this.mostrarAlerta('Error', 'Por favor ingrese su respuesta');
      return;
    }

    try {
        console.log(this.usuarioEncontrado.respuestaSeguridad, 'respuestabd');
        console.log(this.respuestaUsuario);
        console.log(this.preguntaSeguridad, 'preguntabd');
        console.log(this.preguntaSeleccionada);
      // Comparar directamente con la respuesta almacenada en usuarioEncontrado
      if (this.usuarioEncontrado.respuestaSeguridad === this.respuestaUsuario
      && this.preguntaSeguridad === this.preguntaSeleccionada) {
        this.paso = 3;
        this.cdr.detectChanges();
      } else {
        await this.mostrarAlerta('Error', 'Respuesta incorrecta');
      }
    } catch (error) {
      console.error('Error al verificar respuesta:', error);
      await this.mostrarAlerta('Error', 'Ocurrió un error al verificar la respuesta');
    }
  }

  async cambiarContrasena() {
    if (!this.validarContrasenas()) {
      return;
    }

    try {
      await this.bd.modificarContrasena2(this.email, this.nuevaContrasena);
      await this.mostrarAlerta('Éxito', 'Contraseña actualizada correctamente');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cambiar contraseña:', error);
      await this.mostrarAlerta('Error', 'No se pudo actualizar la contraseña');
    }
  }

  validarContrasenas(): boolean {
    if (this.nuevaContrasena.length < 8) {
      this.mostrarAlerta('Error', 'La contraseña debe tener al menos 8 caracteres');
      return false;
    }

    if (!/[A-Z]/.test(this.nuevaContrasena)) {
      this.mostrarAlerta('Error', 'La contraseña debe contener al menos una mayúscula');
      return false;
    }

    if (!/[0-9]/.test(this.nuevaContrasena)) {
      this.mostrarAlerta('Error', 'La contraseña debe contener al menos un número');
      return false;
    }

    if (!/[!@#$%^&*]/.test(this.nuevaContrasena)) {
      this.mostrarAlerta('Error', 'La contraseña debe contener al menos un carácter especial (!@#$%^&*)');
      return false;
    }

    if (this.nuevaContrasena !== this.confirmarContrasena) {
      this.mostrarAlerta('Error', 'Las contraseñas no coinciden');
      return false;
    }

    return true;
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }




  // Método para manejar el envío del enlace de recuperación
  /*sendResetLink() {
    if (this.email) {
      // Lógica para enviar el enlace de recuperación
      console.log('Enlace de recuperación enviado a: ', this.email);
      // Aquí deberías agregar el servicio para enviar el enlace de recuperación
      this.presentAlert1();
    } else {
      // Manejo del caso en que el campo de correo esté vacío
      console.error('Por favor ingresa un correo electrónico.');
      this.presentAlert();
    }

    
    
  }

  
}*/
}
