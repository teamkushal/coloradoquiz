import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1945Component } from './test-component1945.component';

describe('TestComponent1945Component', () => {
  let component: TestComponent1945Component;
  let fixture: ComponentFixture<TestComponent1945Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1945Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
