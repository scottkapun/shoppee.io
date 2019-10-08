import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktivasiPage } from './aktivasi.page';

describe('AktivasiPage', () => {
  let component: AktivasiPage;
  let fixture: ComponentFixture<AktivasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktivasiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktivasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
