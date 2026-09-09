import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoGuardia } from './medico-guardia';

describe('MedicoGuardia', () => {
  let component: MedicoGuardia;
  let fixture: ComponentFixture<MedicoGuardia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoGuardia],
    }).compileComponents();

    fixture = TestBed.createComponent(MedicoGuardia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
