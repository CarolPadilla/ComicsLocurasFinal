import { TestBed } from '@angular/core/testing';
import { StorageService } from './servicebd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx'; // Asegúrate de que esta es la ruta correcta

describe('ServicebdService', () => {
  let service: StorageService;

  // Crear un mock de SQLite
  const sqliteMock = {
    openDatabase: jasmine.createSpy('openDatabase').and.returnValue(Promise.resolve()),
    executeSql: jasmine.createSpy('executeSql').and.returnValue(Promise.resolve())
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,  // Asegúrate de incluir el servicio si lo necesitas
        { provide: SQLite, useValue: sqliteMock }  // Usar el mock de SQLite
      ]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
