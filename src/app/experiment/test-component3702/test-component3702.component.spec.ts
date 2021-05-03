import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3702Component } from './test-component3702.component';

describe('TestComponent3702Component', () => {
  let component: TestComponent3702Component;
  let fixture: ComponentFixture<TestComponent3702Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3702Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
