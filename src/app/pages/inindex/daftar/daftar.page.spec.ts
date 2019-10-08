import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPage } from './daftar.page';

describe('DaftarPage', () => {
  let component: DaftarPage;
  let fixture: ComponentFixture<DaftarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
