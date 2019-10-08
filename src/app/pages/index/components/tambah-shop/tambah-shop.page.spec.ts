import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahShopPage } from './tambah-shop.page';

describe('TambahShopPage', () => {
  let component: TambahShopPage;
  let fixture: ComponentFixture<TambahShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
