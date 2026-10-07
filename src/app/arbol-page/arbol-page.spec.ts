import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolPage } from './arbol-page';

describe('ArbolPage', () => {
  let component: ArbolPage;
  let fixture: ComponentFixture<ArbolPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbolPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ArbolPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
