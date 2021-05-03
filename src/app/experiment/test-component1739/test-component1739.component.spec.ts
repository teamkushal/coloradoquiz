import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1739Component } from './test-component1739.component';

describe('TestComponent1739Component', () => {
  let component: TestComponent1739Component;
  let fixture: ComponentFixture<TestComponent1739Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1739Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
