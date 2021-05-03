import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2264Component } from './test-component2264.component';

describe('TestComponent2264Component', () => {
  let component: TestComponent2264Component;
  let fixture: ComponentFixture<TestComponent2264Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2264Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
