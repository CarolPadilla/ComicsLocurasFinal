import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroventaPage } from './registroventa.page';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule en el test

describe('RegistroventaPage', () => {
  let component: RegistroventaPage;
  let fixture: ComponentFixture<RegistroventaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroventaPage],
      imports: [FormsModule]  // Incluye FormsModule en el test también
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroventaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
