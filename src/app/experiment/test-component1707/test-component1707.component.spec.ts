import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1707Component } from './test-component1707.component';

describe('TestComponent1707Component', () => {
  let component: TestComponent1707Component;
  let fixture: ComponentFixture<TestComponent1707Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1707Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
