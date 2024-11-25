import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo: string = "";
  clave: string = "";
  valor: any;
  constructor(private router: Router, private bd: StorageService) {

  }
  ingresar() {
    //tomar los datos del formulario y verificar si existen en la tabla de BD
    this.valor = this.bd.login(this.correo, this.clave);

  }

  ngOnInit() {
  }

}
