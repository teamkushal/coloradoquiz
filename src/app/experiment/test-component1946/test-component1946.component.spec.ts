import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1946Component } from './test-component1946.component';

describe('TestComponent1946Component', () => {
  let component: TestComponent1946Component;
  let fixture: ComponentFixture<TestComponent1946Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1946Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
