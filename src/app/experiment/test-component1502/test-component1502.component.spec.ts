import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1502Component } from './test-component1502.component';

describe('TestComponent1502Component', () => {
  let component: TestComponent1502Component;
  let fixture: ComponentFixture<TestComponent1502Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1502Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
