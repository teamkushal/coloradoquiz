import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1799Component } from './test-component1799.component';

describe('TestComponent1799Component', () => {
  let component: TestComponent1799Component;
  let fixture: ComponentFixture<TestComponent1799Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1799Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
