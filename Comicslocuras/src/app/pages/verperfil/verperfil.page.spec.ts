import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerPerfilPage } from './verperfil.page';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/servicebd.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';

describe('VerPerfilPage', () => {
  let component: VerPerfilPage;
  let fixture: ComponentFixture<VerPerfilPage>;
  let routerSpy: jasmine.SpyObj<Router>;
  let storageSpy: jasmine.SpyObj<NativeStorage>;
  let bdSpy: jasmine.SpyObj<StorageService>;
  let cdrSpy: jasmine.SpyObj<ChangeDetectorRef>;

  beforeEach(async () => {
    // Crear espías (mocks) para los servicios
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    storageSpy = jasmine.createSpyObj('NativeStorage', ['getItem']);
    bdSpy = jasmine.createSpyObj('StorageService', ['fetchUsuario', 'searchUserById']);
    cdrSpy = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);

    // Configurar el mock de bdSpy
    bdSpy.fetchUsuario = jasmine.createSpy('fetchUsuario').and.returnValue(of({
      nombre_u: 'Test User',
      correo_u: 'test@example.com',
      clave_u: '1234',
      foto_u: 'test-image.jpg'
    }));
    bdSpy.searchUserById = jasmine.createSpy('searchUserById').and.returnValue(Promise.resolve({
      nombre_u: 'Test User',
      correo_u: 'test@example.com',
      clave_u: '1234',
      foto_u: 'test-image.jpg'
    }));

    // Configurar el TestBed
    await TestBed.configureTestingModule({
      declarations: [ VerPerfilPage ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: NativeStorage, useValue: storageSpy },
        { provide: StorageService, useValue: bdSpy },
        { provide: ChangeDetectorRef, useValue: cdrSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPerfilPage);
    component = fixture.componentInstance;
  });

  it('should load user data on ionViewWillEnter', async () => {
    // Simulamos que el storage devuelve un id de usuario
    storageSpy.getItem.and.returnValue(Promise.resolve(1));  // ID del usuario

    // Llamamos a ionViewWillEnter para cargar los datos del usuario
    await component.ionViewWillEnter();

    // Esperamos que el componente haya actualizado sus valores
    await fixture.whenStable();

    // Verificamos que los valores del componente hayan sido configurados correctamente
    expect(component.username).toBe('Test User');
    expect(component.email).toBe('test@example.com');
    expect(component.password).toBe('1234');
    expect(component.imagen).toBe('test-image.jpg');
  });

  it('should navigate to edit profile', () => {
    // Configurar los datos del componente
    component.username = 'Test User';
    component.email = 'test@example.com';
    component.password = '1234';
    component.imagen = 'test-image.jpg';
    component.id_user = 1;

    // Llamamos al método editProfile
    component.editProfile();

    // Verificamos que la navegación se haya llamado con los parámetros correctos
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/editarperfil'], {
      state: {
        user: {
          id_usuario: 1,
          nombre_u: 'Test User',
          correo_u: 'test@example.com',
          clave_u: '1234',
          foto_u: 'test-image.jpg'
        }
      }
    });
  });
});
