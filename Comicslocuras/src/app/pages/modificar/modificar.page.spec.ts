import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPage } from './modificar.page';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';
import { of } from 'rxjs';

// Mock del ActivatedRoute
class MockActivatedRoute {
  queryParams = of({}); // Simulamos los queryParams como un observable vacío
}

// Mock del Router
class MockRouter {
  getCurrentNavigation() {
    return {
      extras: {
        state: { 
          Crud: { 
            id_producto: '1', 
            nombre_p: 'Producto', 
            precio_p: '100', 
            stock: '10', 
            descripcion: 'Descripción', 
            foto_p: 'foto_url' 
          } 
        }
      }
    };
  }
}

// Mock del StorageService
class MockStorageService {
  modificarCrud(id: string, nombre: string, precio: string, stock: string, descripcion: string, foto: string) {
    // Simulamos que el método modificarCrud devuelve un observable exitoso
    return of(true);
  }
}

describe('ModificarPage', () => {
  let component: ModificarPage;
  let fixture: ComponentFixture<ModificarPage>;
  let storageService: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarPage],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: Router, useClass: MockRouter },
        { provide: StorageService, useClass: MockStorageService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarPage);
    component = fixture.componentInstance;
    storageService = TestBed.inject(StorageService); // Inyectamos el StorageService
    fixture.detectChanges();
  });

  it('should create - Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize Crud object from navigation state - Debería inicializar el objeto Crud desde el estado de navegación', () => {
    expect(component.Crud).toEqual({ 
      id_producto: '1', 
      nombre_p: 'Producto', 
      precio_p: '100', 
      stock: '10', 
      descripcion: 'Descripción', 
      foto_p: 'foto_url' 
    });
  });

  it('should call modificarCrud method - Debería llamar al método modificarCrud', () => {
    spyOn(storageService, 'modificarCrud').and.callThrough(); // Espejeamos el método
    component.modificar();
    expect(storageService.modificarCrud).toHaveBeenCalled();
  });
});
