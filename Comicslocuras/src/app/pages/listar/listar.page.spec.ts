import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPage } from './listar.page';
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

describe('ListarPage', () => {
  let component: ListarPage;
  let fixture: ComponentFixture<ListarPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPage],
      providers: [
        StorageService,  // Proveer el servicio que usa SQLite
        { provide: SQLite, useClass: MockSQLite },  // Proveer el mock de SQLite
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
