import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StorageService } from './services/servicebd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

// Primero defines el mock de SQLite
class MockSQLite {
  openDatabase(options: any) {
    return Promise.resolve({});  // Simula la apertura de la base de datos
  }

  executeSql(sql: string, params: any[]) {
    return Promise.resolve();  // Simula la ejecución de una consulta SQL
  }
}

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        StorageService,  // Proveer el servicio que usa SQLite
        { provide: SQLite, useClass: MockSQLite },  // Proveer el mock de SQLite
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
