import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1879Component } from './test-component1879.component';

describe('TestComponent1879Component', () => {
  let component: TestComponent1879Component;
  let fixture: ComponentFixture<TestComponent1879Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1879Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
