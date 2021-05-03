import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1595Component } from './test-component1595.component';

describe('TestComponent1595Component', () => {
  let component: TestComponent1595Component;
  let fixture: ComponentFixture<TestComponent1595Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1595Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
