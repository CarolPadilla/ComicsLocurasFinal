import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  irPagina(){

    this.router.navigate(['/cambiocontrase']);


  }


}
