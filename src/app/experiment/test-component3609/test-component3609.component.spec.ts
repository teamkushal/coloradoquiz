import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3609Component } from './test-component3609.component';

describe('TestComponent3609Component', () => {
  let component: TestComponent3609Component;
  let fixture: ComponentFixture<TestComponent3609Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3609Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
