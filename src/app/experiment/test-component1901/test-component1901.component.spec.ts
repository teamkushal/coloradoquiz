import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1901Component } from './test-component1901.component';

describe('TestComponent1901Component', () => {
  let component: TestComponent1901Component;
  let fixture: ComponentFixture<TestComponent1901Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1901Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
