import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1459Component } from './test-component1459.component';

describe('TestComponent1459Component', () => {
  let component: TestComponent1459Component;
  let fixture: ComponentFixture<TestComponent1459Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1459Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
