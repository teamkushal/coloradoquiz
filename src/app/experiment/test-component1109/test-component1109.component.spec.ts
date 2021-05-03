import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1109Component } from './test-component1109.component';

describe('TestComponent1109Component', () => {
  let component: TestComponent1109Component;
  let fixture: ComponentFixture<TestComponent1109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
