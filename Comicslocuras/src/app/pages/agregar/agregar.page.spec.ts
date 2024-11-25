import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPage } from './agregar.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';  // O donde sea que estés importando SQLite
import { StorageService } from 'src/app/services/servicebd.service';  // Importa el servicio StorageService

// Mock para SQLite
class MockSQLite {
  openDatabase() {
    return Promise.resolve();  // Simula el comportamiento de openDatabase
  }

  // Puedes agregar otros métodos que tu servicio StorageService use
  executeSql(query: string, params: any[] = []) {
    return Promise.resolve();  // Simula la ejecución de una consulta
  }
}

describe('AgregarPage', () => {
  let component: AgregarPage;
  let fixture: ComponentFixture<AgregarPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarPage],
      providers: [
        { provide: SQLite, useClass: MockSQLite },  // Proveer el mock de SQLite
        StorageService  // Asegúrate de que el servicio que usa SQLite también esté proporcionado
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
