import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2812Component } from './test-component2812.component';

describe('TestComponent2812Component', () => {
  let component: TestComponent2812Component;
  let fixture: ComponentFixture<TestComponent2812Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2812Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
