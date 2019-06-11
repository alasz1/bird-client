import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsightingComponent } from './editsighting.component';

describe('EditsightingComponent', () => {
  let component: EditsightingComponent;
  let fixture: ComponentFixture<EditsightingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsightingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
