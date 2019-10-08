import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeranjangPage } from './keranjang.page';

describe('KeranjangPage', () => {
  let component: KeranjangPage;
  let fixture: ComponentFixture<KeranjangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeranjangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeranjangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
