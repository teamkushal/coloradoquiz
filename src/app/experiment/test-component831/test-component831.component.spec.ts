import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent831Component } from './test-component831.component';

describe('TestComponent831Component', () => {
  let component: TestComponent831Component;
  let fixture: ComponentFixture<TestComponent831Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent831Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
