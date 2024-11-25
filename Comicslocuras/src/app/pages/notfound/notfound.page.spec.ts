import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotfoundPage } from './notfound.page';
import { By } from '@angular/platform-browser'; // Para buscar el contenido en el HTML

describe('NotfoundPage', () => {
  let component: NotfoundPage;
  let fixture: ComponentFixture<NotfoundPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundPage ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotfoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "404" message in h1', () => {
    const h1Element = fixture.debugElement.query(By.css('h1'));
    expect(h1Element.nativeElement.textContent).toBe('404');
  });

  it('should display "¡ERROR! Página no encontrada" message in h2', () => {
    const h2Element = fixture.debugElement.query(By.css('h2'));
    expect(h2Element.nativeElement.textContent).toBe('¡ERROR! Página no encontrada');
  });
});
