import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2831Component } from './test-component2831.component';

describe('TestComponent2831Component', () => {
  let component: TestComponent2831Component;
  let fixture: ComponentFixture<TestComponent2831Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2831Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
