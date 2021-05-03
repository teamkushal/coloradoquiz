import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1677Component } from './test-component1677.component';

describe('TestComponent1677Component', () => {
  let component: TestComponent1677Component;
  let fixture: ComponentFixture<TestComponent1677Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1677Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
