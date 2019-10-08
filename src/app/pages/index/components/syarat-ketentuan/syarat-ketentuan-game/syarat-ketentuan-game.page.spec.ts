import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyaratKetentuanGamePage } from './syarat-ketentuan-game.page';

describe('SyaratKetentuanGamePage', () => {
  let component: SyaratKetentuanGamePage;
  let fixture: ComponentFixture<SyaratKetentuanGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyaratKetentuanGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyaratKetentuanGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
