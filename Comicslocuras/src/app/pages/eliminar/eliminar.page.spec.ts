import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EliminarPage } from './eliminar.page';
import { StorageService } from 'src/app/services/servicebd.service';
import { Router, NavigationExtras } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { BehaviorSubject, of } from 'rxjs';

// Mock data
const mockCrudData = [
  {
    idcrud: 1,
    id: '1',
    nombre: 'Test Manga',
    descripcion: 'Test Description',
    imagen: 'test.jpg',
    precio: '9.99',
    categoria: 'Test Category'
  }
];

// Mock del StorageService
const storageServiceMock = {
  dbState: () => new BehaviorSubject(true),
  fetchcrud: () => of(mockCrudData),
  eliminarCrud: jasmine.createSpy('eliminarCrud'),
};

// Mock del Router
const routerMock = {
  navigate: jasmine.createSpy('navigate')
};

// Mock de SQLite
const sqliteMock = {
  create: () => Promise.resolve({
    executeSql: () => Promise.resolve([])
  })
};

describe('EliminarPage', () => {
  let component: EliminarPage;
  let fixture: ComponentFixture<EliminarPage>;
  let storageService: StorageService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: StorageService, useValue: storageServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: SQLite, useValue: sqliteMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarPage);
    component = fixture.componentInstance;
    storageService = TestBed.inject(StorageService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create - Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('should load crud data on init when database is ready - Debería cargar los datos de crud al inicializar cuando la base de datos esté lista', () => {
    component.ngOnInit();
    expect(component.arreglocrud).toEqual(mockCrudData);
  });

  it('should navigate to editar page with correct state when modificar is called - Deberia navegar a la página de editar con el estado correcto cuando se llame a modificar', () => {
    const mockItem = mockCrudData[0];
    const expectedNavigationExtras: NavigationExtras = {
      state: {
        crud: mockItem
      }
    };

    component.modificar(mockItem);

    expect(routerMock.navigate).toHaveBeenCalledWith(['/editar'], expectedNavigationExtras);
  });

  it('should call eliminarCrud with correct id when eliminar is called - Debería llamar a eliminarCrud con el ID correcto cuando se llame a eliminar', () => {
    const mockItem = mockCrudData[0];
    
    component.eliminar(mockItem);

    expect(storageServiceMock.eliminarCrud).toHaveBeenCalledWith(mockItem.idcrud);
  });

  it('should navigate to agregar page when agregar is called - Debería navegar a la página de agregar cuando se llame a agregar', () => {
    component.agregar();

    expect(routerMock.navigate).toHaveBeenCalledWith(['/agregar']);
  });
});