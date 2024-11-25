import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private apiUrl = 'https://gateway.marvel.com/v1/public/comics'; // Endpoint de Marvel para obtener cómics
  private apiKey = '6f23ba4aef617034780fcdc7fdc09f27'; // Reemplaza con tu clave pública de la API de Marvel
  private ts = '1'; // Timestamp (puedes cambiarlo)
  private hash = '4ec8f9e28272f3046553d6f346b90f22'; // Reemplaza con tu hash (generado con ts+clave privada+clave pública)

  constructor(private http: HttpClient) {}

  // Método para obtener cómics
  getComics(): Observable<any> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&ts=${this.ts}&hash=${this.hash}`;
    return this.http.get(url);
  }
}
