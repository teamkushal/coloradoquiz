import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1561Component } from './test-component1561.component';

describe('TestComponent1561Component', () => {
  let component: TestComponent1561Component;
  let fixture: ComponentFixture<TestComponent1561Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1561Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
