import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage {
  latitud: number | undefined;
  longitud: number | undefined;

  async obtenerPosicion() {
    const position = await Geolocation.getCurrentPosition();
    this.latitud = position.coords.latitude;
    this.longitud = position.coords.longitude;
  }
}
