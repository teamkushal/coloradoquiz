import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1702Component } from './test-component1702.component';

describe('TestComponent1702Component', () => {
  let component: TestComponent1702Component;
  let fixture: ComponentFixture<TestComponent1702Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1702Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
