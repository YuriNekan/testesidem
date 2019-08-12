import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPage } from './css.page';

describe('CssPage', () => {
  let component: CssPage;
  let fixture: ComponentFixture<CssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
