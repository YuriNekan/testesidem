import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaymenuPage } from './laymenu.page';

describe('LaymenuPage', () => {
  let component: LaymenuPage;
  let fixture: ComponentFixture<LaymenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaymenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaymenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
