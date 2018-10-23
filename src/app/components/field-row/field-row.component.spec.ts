import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldRowComponent } from './field-row.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FieldRowComponent', () => {
  let component: FieldRowComponent;
  let fixture: ComponentFixture<FieldRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldRowComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
