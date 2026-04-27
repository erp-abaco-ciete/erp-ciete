import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPublica } from './landing-publica';

describe('LandingPublica', () => {
  let component: LandingPublica;
  let fixture: ComponentFixture<LandingPublica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPublica],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPublica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
