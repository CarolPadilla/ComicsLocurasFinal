import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-apimarvel',
  templateUrl: './apimarvel.page.html',
  styleUrls: ['./apimarvel.page.scss'],
})
export class ApimarvelPage implements OnInit {
  comics: any[] = [];

  constructor(private marvelService: MarvelService) {}

  ngOnInit() {
    this.loadComics();
  }

  loadComics() {
    this.marvelService.getComics().subscribe((response) => {
      this.comics = response.data.results;
    });
  }
}
