import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1955Component } from './test-component1955.component';

describe('TestComponent1955Component', () => {
  let component: TestComponent1955Component;
  let fixture: ComponentFixture<TestComponent1955Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1955Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
