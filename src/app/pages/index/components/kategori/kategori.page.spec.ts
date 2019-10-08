import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriPage } from './kategori.page';

describe('KategoriPage', () => {
  let component: KategoriPage;
  let fixture: ComponentFixture<KategoriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
