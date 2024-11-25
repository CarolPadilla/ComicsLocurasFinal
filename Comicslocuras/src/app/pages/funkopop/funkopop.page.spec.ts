import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FunkopopPage } from './funkopop.page';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';
import { of } from 'rxjs';

describe('FunkopopPage', () => {
  let component: FunkopopPage;
  let fixture: ComponentFixture<FunkopopPage>;

  // Mock para StorageService
  const mockStorageService = {
    fetchcrud: jasmine.createSpy('fetchcrud').and.returnValue(of([])), // Simula un Observable vacío o con datos ficticios
  };

  // Mock para el Router
  const mockRouter = {
    navigate: jasmine.createSpy('navigate'), // Simula la navegación
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunkopopPage],
      providers: [
        { provide: StorageService, useValue: mockStorageService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FunkopopPage);
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
    const producto = { id: 1, name: 'Funkopop 1', price: 50 };
    component.vermasProducto(producto);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/detalleproducto'], {
      state: { prod: producto },
    });
  });
});
