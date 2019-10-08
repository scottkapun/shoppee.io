import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahShopGamePage } from './tambah-shop-game.page';

describe('TambahShopGamePage', () => {
  let component: TambahShopGamePage;
  let fixture: ComponentFixture<TambahShopGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahShopGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahShopGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
