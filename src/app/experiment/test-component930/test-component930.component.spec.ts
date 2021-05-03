import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent930Component } from './test-component930.component';

describe('TestComponent930Component', () => {
  let component: TestComponent930Component;
  let fixture: ComponentFixture<TestComponent930Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent930Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
