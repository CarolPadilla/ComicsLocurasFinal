import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importar HttpClientTestingModule
import { ApimarvelPage } from './apimarvel.page';  // Ajusta la ruta según sea necesario
import { MarvelService } from 'src/app/services/marvel.service';  // Importar el servicio MarvelService

describe('ApimarvelPage', () => {
  let component: ApimarvelPage;
  let fixture: ComponentFixture<ApimarvelPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Importar el módulo necesario para HttpClient
      declarations: [ApimarvelPage],  // Declarar el componente de la página
      providers: [MarvelService]  // Asegurarse de que MarvelService esté incluido
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApimarvelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
