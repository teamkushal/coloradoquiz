import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1543Component } from './test-component1543.component';

describe('TestComponent1543Component', () => {
  let component: TestComponent1543Component;
  let fixture: ComponentFixture<TestComponent1543Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1543Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
