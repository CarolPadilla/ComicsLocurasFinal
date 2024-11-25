import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccesoriosPage } from './accesorios.page';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';
import { of } from 'rxjs';

describe('AccesoriosPage', () => {
  let component: AccesoriosPage;
  let fixture: ComponentFixture<AccesoriosPage>;

  // Mocks para los servicios
  const mockStorageService = {
    fetchcrud: jasmine.createSpy('fetchcrud').and.returnValue(of([])), // Simula un Observable vacío
  };

  const mockRouter = {
    navigate: jasmine.createSpy('navigate'), // Simula el método de navegación
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccesoriosPage],
      providers: [
        { provide: StorageService, useValue: mockStorageService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AccesoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products on initialization', () => {
    expect(mockStorageService.fetchcrud).toHaveBeenCalled();
  });

  it('should navigate to product detail page with correct data', () => {
    const producto = { id: 1, name: 'Producto 1', price: 100 };
    component.vermasProducto(producto);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/detalleproducto'], {
      state: { prod: producto },
    });
  });
});
