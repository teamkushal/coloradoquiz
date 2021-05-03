import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent702Component } from './test-component702.component';

describe('TestComponent702Component', () => {
  let component: TestComponent702Component;
  let fixture: ComponentFixture<TestComponent702Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent702Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
