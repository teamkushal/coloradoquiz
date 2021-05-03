import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2430Component } from './test-component2430.component';

describe('TestComponent2430Component', () => {
  let component: TestComponent2430Component;
  let fixture: ComponentFixture<TestComponent2430Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2430Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
