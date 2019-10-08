import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritPage } from './favorit.page';

describe('FavoritPage', () => {
  let component: FavoritPage;
  let fixture: ComponentFixture<FavoritPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
