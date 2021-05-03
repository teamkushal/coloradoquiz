import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1084Component } from './test-component1084.component';

describe('TestComponent1084Component', () => {
  let component: TestComponent1084Component;
  let fixture: ComponentFixture<TestComponent1084Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1084Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
