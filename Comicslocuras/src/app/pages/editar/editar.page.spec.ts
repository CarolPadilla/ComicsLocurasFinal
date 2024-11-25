import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPage } from './editar.page';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { StorageService } from 'src/app/services/servicebd.service';
import { Camera } from '@capacitor/camera';

const mockRouter = {
  getCurrentNavigation: jasmine.createSpy('getCurrentNavigation').and.returnValue({
    extras: {
      state: {
        crud: { idcrud: 1, nombre: 'Producto 1', descripcion: 'Descripción', imagen: '', precio: 100, categoria: 'Categoría' }
      }
    }
  }),
};

const mockActivatedRoute = {
  queryParams: of({}),
};

const mockStorageService = {
  modificarCrud: jasmine.createSpy('modificarCrud').and.returnValue(of({})),
};

describe('EditarPage', () => {
  let component: EditarPage;
  let fixture: ComponentFixture<EditarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarPage],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: StorageService, useValue: mockStorageService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create - Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize crud data from navigation state - Debería obtener los datos del crud desde el estado de navegación', () => {
    expect(component.crud).toEqual({ idcrud: 1, nombre: 'Producto 1', descripcion: 'Descripción', imagen: '', precio: 100, categoria: 'Categoría' });
  });

  it('should call modificarCrud on modificar - debería llamar a modificarCrud', () => {
    component.modificar();
    expect(mockStorageService.modificarCrud).toHaveBeenCalledWith(1, 'Producto 1', 'Descripción', '', 100, 'Categoría');
  });
});
