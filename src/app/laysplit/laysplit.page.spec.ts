import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaysplitPage } from './laysplit.page';

describe('LaysplitPage', () => {
  let component: LaysplitPage;
  let fixture: ComponentFixture<LaysplitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaysplitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaysplitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
