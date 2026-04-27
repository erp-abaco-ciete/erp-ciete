import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosTarifarios } from './contratos-tarifarios';

describe('ContratosTarifarios', () => {
  let component: ContratosTarifarios;
  let fixture: ComponentFixture<ContratosTarifarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosTarifarios],
    }).compileComponents();

    fixture = TestBed.createComponent(ContratosTarifarios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
