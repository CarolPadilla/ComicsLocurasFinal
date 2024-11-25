import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangasPage } from './mangas.page';
import { StorageService } from 'src/app/services/servicebd.service';  // Importa el servicio StorageService
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx'; // Si usas SQLite como plugin
import { of } from 'rxjs';

// Mock para SQLite
class MockSQLite {
  // Si se necesita algún método específico de SQLite, como `openDatabase`, se pueden agregar aquí
  openDatabase() {
    return Promise.resolve();  // Simula el comportamiento de `openDatabase`
  }

  executeSql() {
    return Promise.resolve();  // Simula el comportamiento de `executeSql`
  }
}

describe('MangasPage', () => {
  let component: MangasPage;
  let fixture: ComponentFixture<MangasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangasPage],
      providers: [
        StorageService,
        { provide: SQLite, useClass: MockSQLite }  // Asegúrate de proveer el mock aquí
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MangasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
