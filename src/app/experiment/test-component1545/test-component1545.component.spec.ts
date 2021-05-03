import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1545Component } from './test-component1545.component';

describe('TestComponent1545Component', () => {
  let component: TestComponent1545Component;
  let fixture: ComponentFixture<TestComponent1545Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1545Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
