import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1642Component } from './test-component1642.component';

describe('TestComponent1642Component', () => {
  let component: TestComponent1642Component;
  let fixture: ComponentFixture<TestComponent1642Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1642Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
