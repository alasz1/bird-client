import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsightingComponent } from './addsighting.component';

describe('AddsightingComponent', () => {
  let component: AddsightingComponent;
  let fixture: ComponentFixture<AddsightingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsightingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
