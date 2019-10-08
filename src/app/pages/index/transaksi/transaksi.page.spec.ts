import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiPage } from './transaksi.page';

describe('TransaksiPage', () => {
  let component: TransaksiPage;
  let fixture: ComponentFixture<TransaksiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
