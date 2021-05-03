import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3853Component } from './test-component3853.component';

describe('TestComponent3853Component', () => {
  let component: TestComponent3853Component;
  let fixture: ComponentFixture<TestComponent3853Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3853Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
