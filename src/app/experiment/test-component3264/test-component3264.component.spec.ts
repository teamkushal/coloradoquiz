import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3264Component } from './test-component3264.component';

describe('TestComponent3264Component', () => {
  let component: TestComponent3264Component;
  let fixture: ComponentFixture<TestComponent3264Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3264Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
