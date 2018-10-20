import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropSortingComponent } from './drag-drop-sorting.component';

describe('DragDropSortingComponent', () => {
  let component: DragDropSortingComponent;
  let fixture: ComponentFixture<DragDropSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
