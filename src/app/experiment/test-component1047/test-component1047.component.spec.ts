import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1047Component } from './test-component1047.component';

describe('TestComponent1047Component', () => {
  let component: TestComponent1047Component;
  let fixture: ComponentFixture<TestComponent1047Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1047Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
