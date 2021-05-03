import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2945Component } from './test-component2945.component';

describe('TestComponent2945Component', () => {
  let component: TestComponent2945Component;
  let fixture: ComponentFixture<TestComponent2945Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2945Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
