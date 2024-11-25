import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CarritoComprasPage } from './carritocompras.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { StorageService } from 'src/app/services/servicebd.service';

describe('CarritocomprasPage', () => {
  let component: CarritoComprasPage;

  // Mock para SQLite
  const sqliteMock = {
    create: jasmine.createSpy('create').and.returnValue(Promise.resolve({
      transaction: jasmine.createSpy('transaction')
    }))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritoComprasPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => '123' // Cambia según el valor esperado
            })
          }
        },
        {
          provide: SQLite,
          useValue: sqliteMock // Proporcionamos el mock aquí
        },
        StorageService // Incluimos el servicio real si no necesita ser simulado
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(CarritoComprasPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
