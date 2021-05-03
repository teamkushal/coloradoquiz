import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3164Component } from './test-component3164.component';

describe('TestComponent3164Component', () => {
  let component: TestComponent3164Component;
  let fixture: ComponentFixture<TestComponent3164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3164Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
