import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { StorageService } from 'src/app/services/servicebd.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx'; // Asegúrate de que esta es la ruta correcta
import { of } from 'rxjs';

// Mock del servicio SQLite
class MockSQLite {
  create() {
    return of(true); // Simulamos una respuesta exitosa
  }
}

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      providers: [
        StorageService,  // Asegúrate de incluir el servicio si lo necesitas
        { provide: SQLite, useClass: MockSQLite }  // Proveer el mock en lugar del real
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
