import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1639Component } from './test-component1639.component';

describe('TestComponent1639Component', () => {
  let component: TestComponent1639Component;
  let fixture: ComponentFixture<TestComponent1639Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1639Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
