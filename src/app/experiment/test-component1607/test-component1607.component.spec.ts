import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1607Component } from './test-component1607.component';

describe('TestComponent1607Component', () => {
  let component: TestComponent1607Component;
  let fixture: ComponentFixture<TestComponent1607Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1607Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
