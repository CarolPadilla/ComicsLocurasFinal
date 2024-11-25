import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeluchesPage } from './peluches.page';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';
import { of } from 'rxjs';

describe('PeluchesPage', () => {
  let component: PeluchesPage;
  let fixture: ComponentFixture<PeluchesPage>;

  // Mock para el servicio
  const mockStorageService = {
    fetchcrud: jasmine.createSpy('fetchcrud').and.returnValue(of([])), // Simula un Observable vacío o con datos ficticios
  };

  // Mock para el router
  const mockRouter = {
    navigate: jasmine.createSpy('navigate'), // Simula la navegación
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeluchesPage],
      providers: [
        { provide: StorageService, useValue: mockStorageService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PeluchesPage);
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
    const producto = { id: 1, name: 'Peluche 1', price: 100 };
    component.vermasProducto(producto);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/detalleproducto'], {
      state: { prod: producto },
    });
  });
});
