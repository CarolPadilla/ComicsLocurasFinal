import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperaContraPage } from './recuperarcontrase.page';
import { StorageService } from 'src/app/services/servicebd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

// Mock para SQLite
class MockSQLite {
  openDatabase(options: any) {
    return Promise.resolve({});  // Simula la apertura de la base de datos
  }

  executeSql(sql: string, params: any[]) {
    return Promise.resolve();  // Simula la ejecución de una consulta SQL
  }

  // Puedes agregar más métodos si es necesario
}

describe('RecuperarcontrasePage', () => {
  let component: RecuperaContraPage;
  let fixture: ComponentFixture<RecuperaContraPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperaContraPage],
      providers: [
        StorageService,  // Proveer el servicio que usa SQLite
        { provide: SQLite, useClass: MockSQLite },  // Proveer el mock de SQLite
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperaContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
