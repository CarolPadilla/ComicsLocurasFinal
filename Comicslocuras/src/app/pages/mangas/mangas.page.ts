import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.page.html',
  styleUrls: ['./mangas.page.scss'],
})
export class MangasPage implements OnInit {
  productos: any;
/*
  productos = [
    {
      id: 1,
      name: 'One Piece',
      price: 10000,
      description: 'Narra las aventuras de Monkey D. Luffy y su tripulación mientras buscan el tesoro legendario para que Luffy se convierta en el Rey de los Piratas.',
      image: 'assets/img/onepice.jpg'
    },
    {
      id: 2,
      name: 'Sailor Moon',
      price: 10000,
      description: 'Sailor Moon es un manga creado por Naoko Takeuchi que sigue la historia de Usagi Tsukino, una chica de 14 años que descubre que es la reencarnación de la princesa de la Luna',
      image: 'assets/img/sailormoon.jpg'
    },
    {
      id: 3,
      name: 'Boruto',
      price: 10000,
      description: 'Boruto: Naruto Next Generations es un manga creado por Masashi Kishimoto y Mikio Ikemoto. La historia sigue a Boruto Uzumaki, el hijo del séptimo Hokage, Naruto Uzumaki.',
      image: 'assets/img/boruto.jpg'
    },
    {
      id: 4,
      name: 'Dragon Ball',
      price: 10000,
      description: 'Dragon Ball, sigue las aventuras de Son Goku desde su niñez hasta su adultez. La historia comienza con Goku, un joven con una fuerza excepcional',
      image: 'assets/img/dragonball.jpg'
    },
    {
      id: 5,
      name: 'Shin Chan',
      price: 10000,
      description: 'Shin Chan, sigue las travesuras de "Shin" Nohara, un niño de 5 años con un carácter travieso y una visión peculiar del mundo. ',
      image: 'assets/img/shinchan.jpg'
    },
    {
      id: 6,
      name: 'Naruto',
      price: 10000,
      description: '"Naruto" cuenta la historia de Naruto Uzumaki, un joven ninja que sueña con convertirse en el Hokage y ganarse el respeto de su aldea.',
      image: 'assets/img/naruto.jpg'
    },
    {
      id: 7,
      name: 'Jujutsu Kaisen',
      price: 10000,
      description: '"Jujutsu Kaisen" sigue a Yuji Itadori, quien obtiene habilidades sobrenaturales al consumir un objeto maldito y lucha contra maldiciones en una escuela de hechicería.',
      image: 'assets/img/jujutsukaisen.jpg'
    },
    {
      id: 8,
      name: 'One Punch Man',
      price: 10000,
      description: '"One Punch Man" sigue a Saitama, un héroe que derrota a todos con un solo golpe y busca un desafío real.',
      image: 'assets/img/onepunchman.jpg'
    },
    {
      id: 9,
      name: 'Chainsawman',
      price: 10000,
      description: '"Chainsaw Man" sigue a Denji, un cazador de demonios que obtiene poderes de motosierra y busca una vida mejor mientras enfrenta criaturas infernales.',
      image: 'assets/img/chainsawman.jpg'
    }

    // Añade más productos según sea necesario
  ];
*/
  constructor(private router: Router, private bd: StorageService) {
    this.bd.fetchcrud().subscribe(res=>{
      this.productos = res;
    });
   }

  ngOnInit() { }

  // Función para manejar la compra de un producto
  vermasProducto(producto: any) {
    //redirigir los datos del producto a un html interior
    let navigationsextras: NavigationExtras = {
      state: {
        prod: producto
      }
    }
    this.router.navigate(['/detalleproducto'], navigationsextras);

    /*
    const productoSeleccionado = this.productos.find(producto => producto.id === id);
    if (productoSeleccionado) {
      console.log('Producto seleccionado:', productoSeleccionado);
      // Aquí puedes agregar la lógica de compra o navegación
    }*/
  }
}
