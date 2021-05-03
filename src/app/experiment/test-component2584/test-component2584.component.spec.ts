import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2584Component } from './test-component2584.component';

describe('TestComponent2584Component', () => {
  let component: TestComponent2584Component;
  let fixture: ComponentFixture<TestComponent2584Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2584Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
