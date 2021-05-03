import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2639Component } from './test-component2639.component';

describe('TestComponent2639Component', () => {
  let component: TestComponent2639Component;
  let fixture: ComponentFixture<TestComponent2639Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2639Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
