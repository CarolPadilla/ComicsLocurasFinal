import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { StorageService } from '../services/servicebd.service';
import { of } from 'rxjs';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  const mockStorageService = {
    fetchCategoria: jasmine.createSpy('fetchCategoria').and.returnValue(of([])),
    fetchUsuario: jasmine.createSpy('fetchUsuario').and.returnValue(of([])),
    seleccionarCrudCat: jasmine.createSpy('seleccionarCrudCat'),
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomePage],
        providers: [
          { provide: StorageService, useValue: mockStorageService },
          { provide: Router, useValue: mockRouter },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePage);
      component = fixture.componentInstance;
    })
  );

  it('should navigate to mangas when irCategoria is called', () => {
    const mangaMock = { id_categoria: 2 }; // id_categoria 2 debería navegar a '/mangas'

    component.irCategoria(mangaMock);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/mangas']);
  });

  it('should navigate to comics when id_categoria is 1', () => {
    const mangaMock = { id_categoria: 1 }; // id_categoria 1 debería navegar a '/comics'

    component.irCategoria(mangaMock);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/comics']);
  });

  it('should navigate to accesorios when id_categoria is 3', () => {
    const mangaMock = { id_categoria: 3 }; // id_categoria 3 debería navegar a '/accesorios'

    component.irCategoria(mangaMock);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/accesorios']);
  });
});
