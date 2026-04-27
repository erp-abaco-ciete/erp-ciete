import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionesServicio } from './estaciones-servicio';

describe('EstacionesServicio', () => {
  let component: EstacionesServicio;
  let fixture: ComponentFixture<EstacionesServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstacionesServicio],
    }).compileComponents();

    fixture = TestBed.createComponent(EstacionesServicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
