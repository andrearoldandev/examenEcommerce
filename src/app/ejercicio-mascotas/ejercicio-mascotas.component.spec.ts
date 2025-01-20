import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioMascotasComponent } from './ejercicio-mascotas.component';

describe('EjercicioMascotasComponent', () => {
  let component: EjercicioMascotasComponent;
  let fixture: ComponentFixture<EjercicioMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioMascotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
