import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3658Component } from './test-component3658.component';

describe('TestComponent3658Component', () => {
  let component: TestComponent3658Component;
  let fixture: ComponentFixture<TestComponent3658Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3658Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
