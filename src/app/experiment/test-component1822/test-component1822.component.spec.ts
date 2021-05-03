import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1822Component } from './test-component1822.component';

describe('TestComponent1822Component', () => {
  let component: TestComponent1822Component;
  let fixture: ComponentFixture<TestComponent1822Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1822Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
