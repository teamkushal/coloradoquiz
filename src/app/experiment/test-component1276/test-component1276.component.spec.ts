import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1276Component } from './test-component1276.component';

describe('TestComponent1276Component', () => {
  let component: TestComponent1276Component;
  let fixture: ComponentFixture<TestComponent1276Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1276Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
