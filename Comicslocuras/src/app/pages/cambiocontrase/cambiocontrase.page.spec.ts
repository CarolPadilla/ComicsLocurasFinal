import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiocontrasePage } from './cambiocontrase.page';

describe('CambiocontrasePage', () => {
  let component: CambiocontrasePage;
  let fixture: ComponentFixture<CambiocontrasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiocontrasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
