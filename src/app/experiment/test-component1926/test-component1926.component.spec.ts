import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1926Component } from './test-component1926.component';

describe('TestComponent1926Component', () => {
  let component: TestComponent1926Component;
  let fixture: ComponentFixture<TestComponent1926Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1926Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
