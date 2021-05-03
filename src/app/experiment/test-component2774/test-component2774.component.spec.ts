import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2774Component } from './test-component2774.component';

describe('TestComponent2774Component', () => {
  let component: TestComponent2774Component;
  let fixture: ComponentFixture<TestComponent2774Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2774Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
