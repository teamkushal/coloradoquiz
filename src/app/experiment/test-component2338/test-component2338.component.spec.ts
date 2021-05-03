import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2338Component } from './test-component2338.component';

describe('TestComponent2338Component', () => {
  let component: TestComponent2338Component;
  let fixture: ComponentFixture<TestComponent2338Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2338Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
