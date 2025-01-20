import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceExamenComponent } from './ecommerce-examen.component';

describe('EcommerceExamenComponent', () => {
  let component: EcommerceExamenComponent;
  let fixture: ComponentFixture<EcommerceExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceExamenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
