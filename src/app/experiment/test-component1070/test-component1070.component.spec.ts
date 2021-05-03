import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1070Component } from './test-component1070.component';

describe('TestComponent1070Component', () => {
  let component: TestComponent1070Component;
  let fixture: ComponentFixture<TestComponent1070Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1070Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
