import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayHeaderFooterPage } from './lay-header-footer.page';

describe('LayHeaderFooterPage', () => {
  let component: LayHeaderFooterPage;
  let fixture: ComponentFixture<LayHeaderFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayHeaderFooterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayHeaderFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
