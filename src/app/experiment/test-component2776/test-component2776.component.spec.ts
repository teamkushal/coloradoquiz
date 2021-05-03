import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2776Component } from './test-component2776.component';

describe('TestComponent2776Component', () => {
  let component: TestComponent2776Component;
  let fixture: ComponentFixture<TestComponent2776Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2776Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
