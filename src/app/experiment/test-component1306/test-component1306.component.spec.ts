import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1306Component } from './test-component1306.component';

describe('TestComponent1306Component', () => {
  let component: TestComponent1306Component;
  let fixture: ComponentFixture<TestComponent1306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1306Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
