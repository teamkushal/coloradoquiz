import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1939Component } from './test-component1939.component';

describe('TestComponent1939Component', () => {
  let component: TestComponent1939Component;
  let fixture: ComponentFixture<TestComponent1939Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1939Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
