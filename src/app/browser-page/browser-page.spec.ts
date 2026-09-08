import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserPage } from './browser-page';

describe('BrowserPage', () => {
  let component: BrowserPage;
  let fixture: ComponentFixture<BrowserPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
