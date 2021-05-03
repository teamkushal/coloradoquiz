import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1756Component } from './test-component1756.component';

describe('TestComponent1756Component', () => {
  let component: TestComponent1756Component;
  let fixture: ComponentFixture<TestComponent1756Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1756Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
