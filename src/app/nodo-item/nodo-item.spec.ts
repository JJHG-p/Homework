import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodoItem } from './nodo-item';

describe('NodoItem', () => {
  let component: NodoItem;
  let fixture: ComponentFixture<NodoItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodoItem],
    }).compileComponents();

    fixture = TestBed.createComponent(NodoItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
