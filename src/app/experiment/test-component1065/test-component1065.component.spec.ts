import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1065Component } from './test-component1065.component';

describe('TestComponent1065Component', () => {
  let component: TestComponent1065Component;
  let fixture: ComponentFixture<TestComponent1065Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1065Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
