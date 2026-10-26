import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPage } from './tareas-page';

describe('TareasPage', () => {
  let component: TareasPage;
  let fixture: ComponentFixture<TareasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TareasPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
