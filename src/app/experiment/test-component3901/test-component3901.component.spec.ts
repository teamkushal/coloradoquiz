import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3901Component } from './test-component3901.component';

describe('TestComponent3901Component', () => {
  let component: TestComponent3901Component;
  let fixture: ComponentFixture<TestComponent3901Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3901Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
