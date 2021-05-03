import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1115Component } from './test-component1115.component';

describe('TestComponent1115Component', () => {
  let component: TestComponent1115Component;
  let fixture: ComponentFixture<TestComponent1115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1115Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
