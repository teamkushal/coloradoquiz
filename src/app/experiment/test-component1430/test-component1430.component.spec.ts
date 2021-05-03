import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1430Component } from './test-component1430.component';

describe('TestComponent1430Component', () => {
  let component: TestComponent1430Component;
  let fixture: ComponentFixture<TestComponent1430Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1430Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
