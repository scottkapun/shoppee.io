import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahShopClubPage } from './tambah-shop-club.page';

describe('TambahShopClubPage', () => {
  let component: TambahShopClubPage;
  let fixture: ComponentFixture<TambahShopClubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahShopClubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahShopClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
