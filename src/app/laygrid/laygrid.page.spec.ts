import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaygridPage } from './laygrid.page';

describe('LaygridPage', () => {
  let component: LaygridPage;
  let fixture: ComponentFixture<LaygridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaygridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaygridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
