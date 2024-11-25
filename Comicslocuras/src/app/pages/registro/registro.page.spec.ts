import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { StorageService } from 'src/app/services/servicebd.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

// Mock para Router
class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

// Mock para StorageService
class MockStorageService {
  insertarUsuario() {
    return Promise.resolve();  // Simula la inserción del usuario
  }
}

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;
  let router: MockRouter;

  beforeEach(() => {
    router = new MockRouter();  // Crea la instancia del mock de Router

    TestBed.configureTestingModule({
      declarations: [RegistroPage],
      providers: [
        { provide: Router, useValue: router },  // Proveer el mock del Router
        { provide: StorageService, useClass: MockStorageService },  // Proveer el mock del StorageService
        AlertController  // Proveer AlertController si es necesario
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login after successful registration', () => {
    // Asigna valores válidos para el formulario
    component.nombre = 'Test User';
    component.email = 'test@example.com';
    component.contrasena = 'Pass@123';
    component.repetirContrasena = 'Pass@123';
    component.pregunta = '¿Cuál es tu color favorito?';
    component.respuesta = 'Rojo';

    // Asegúrate de que el formulario sea válido
    expect(component.formularioValido()).toBeTrue();

    fixture.detectChanges();  // Asegúrate de que los cambios sean detectados

    component.registrar();

    // Verificar que la navegación ocurrió
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should show alert when the form is not valid', () => {
    // Simula un formulario no válido
    component.nombre = '';
    component.email = 'invalid-email';
    component.contrasena = 'short';
    component.repetirContrasena = 'short';
    component.pregunta = '';
    component.respuesta = '';

    // Espiar la llamada al método mostrarAlerta
    spyOn(component, 'mostrarAlerta');

    component.registrar();

    // Verificar que mostrarAlerta se haya llamado
    expect(component.mostrarAlerta).toHaveBeenCalledWith('Por favor, revisa los campos marcados en rojo e intenta de nuevo.');
  });
});
