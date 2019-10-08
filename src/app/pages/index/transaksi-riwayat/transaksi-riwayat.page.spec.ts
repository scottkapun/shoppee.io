import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiRiwayatPage } from './transaksi-riwayat.page';

describe('TransaksiRiwayatPage', () => {
  let component: TransaksiRiwayatPage;
  let fixture: ComponentFixture<TransaksiRiwayatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiRiwayatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiRiwayatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
