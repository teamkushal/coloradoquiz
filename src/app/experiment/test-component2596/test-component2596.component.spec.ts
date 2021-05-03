import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2596Component } from './test-component2596.component';

describe('TestComponent2596Component', () => {
  let component: TestComponent2596Component;
  let fixture: ComponentFixture<TestComponent2596Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2596Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
