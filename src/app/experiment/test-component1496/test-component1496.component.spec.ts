import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1496Component } from './test-component1496.component';

describe('TestComponent1496Component', () => {
  let component: TestComponent1496Component;
  let fixture: ComponentFixture<TestComponent1496Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1496Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
