import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XlsxViewComponent } from './xlsx-view.component';

describe('XlsxViewComponent', () => {
  let component: XlsxViewComponent;
  let fixture: ComponentFixture<XlsxViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XlsxViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XlsxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
