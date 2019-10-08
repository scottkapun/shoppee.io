import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutabsPage } from './menutabs.page';

describe('MenutabsPage', () => {
  let component: MenutabsPage;
  let fixture: ComponentFixture<MenutabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
