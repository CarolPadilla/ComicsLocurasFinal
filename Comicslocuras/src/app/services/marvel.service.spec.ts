import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo de pruebas para HttpClient
import { MarvelService } from './marvel.service';  // Ajusta la ruta si es necesario

describe('MarvelService', () => {
  let service: MarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Agrega el HttpClientTestingModule aquí
      providers: [MarvelService]  // Asegúrate de que el servicio MarvelService esté incluido en los providers
    });
    service = TestBed.inject(MarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
