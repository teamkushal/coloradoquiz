import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1959Component } from './test-component1959.component';

describe('TestComponent1959Component', () => {
  let component: TestComponent1959Component;
  let fixture: ComponentFixture<TestComponent1959Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1959Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
