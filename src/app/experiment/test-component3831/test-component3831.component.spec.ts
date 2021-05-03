import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3831Component } from './test-component3831.component';

describe('TestComponent3831Component', () => {
  let component: TestComponent3831Component;
  let fixture: ComponentFixture<TestComponent3831Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3831Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3831Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
