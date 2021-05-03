import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1094Component } from './test-component1094.component';

describe('TestComponent1094Component', () => {
  let component: TestComponent1094Component;
  let fixture: ComponentFixture<TestComponent1094Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1094Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
