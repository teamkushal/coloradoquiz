import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2306Component } from './test-component2306.component';

describe('TestComponent2306Component', () => {
  let component: TestComponent2306Component;
  let fixture: ComponentFixture<TestComponent2306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2306Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
