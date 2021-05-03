import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1674Component } from './test-component1674.component';

describe('TestComponent1674Component', () => {
  let component: TestComponent1674Component;
  let fixture: ComponentFixture<TestComponent1674Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1674Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
