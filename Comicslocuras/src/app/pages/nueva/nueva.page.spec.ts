import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaPage } from './nueva.page';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx'; // Asegúrate de tener este import
import { StorageService } from 'src/app/services/servicebd.service';  // Importa el servicio StorageService

// Mock para NativeStorage
class MockNativeStorage {
  setItem(key: string, value: any) {
    return Promise.resolve();  // Simula que el setItem siempre funciona
  }
  
  getItem(key: string) {
    return Promise.resolve('mocked value');  // Devuelve un valor simulado
  }

  remove(key: string) {
    return Promise.resolve();  // Simula que remove funciona
  }
}

describe('NuevaPage', () => {
  let component: NuevaPage;
  let fixture: ComponentFixture<NuevaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaPage],
      providers: [
        { provide: NativeStorage, useClass: MockNativeStorage },  // Proveemos el mock de NativeStorage
        StorageService  // Asegúrate de que cualquier servicio que dependa de NativeStorage esté proporcionado
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
