import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1103Component } from './test-component1103.component';

describe('TestComponent1103Component', () => {
  let component: TestComponent1103Component;
  let fixture: ComponentFixture<TestComponent1103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
