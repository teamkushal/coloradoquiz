import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1831Component } from './test-component1831.component';

describe('TestComponent1831Component', () => {
  let component: TestComponent1831Component;
  let fixture: ComponentFixture<TestComponent1831Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1831Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
