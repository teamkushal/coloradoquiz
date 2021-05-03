import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1393Component } from './test-component1393.component';

describe('TestComponent1393Component', () => {
  let component: TestComponent1393Component;
  let fixture: ComponentFixture<TestComponent1393Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1393Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
