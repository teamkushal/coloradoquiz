import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1611Component } from './test-component1611.component';

describe('TestComponent1611Component', () => {
  let component: TestComponent1611Component;
  let fixture: ComponentFixture<TestComponent1611Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1611Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
