import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio2directivasComponent } from './ejercicio2directivas.component';

describe('Ejercicio2directivasComponent', () => {
  let component: Ejercicio2directivasComponent;
  let fixture: ComponentFixture<Ejercicio2directivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio2directivasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio2directivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
