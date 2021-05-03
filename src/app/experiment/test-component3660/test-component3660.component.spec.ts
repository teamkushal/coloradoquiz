import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3660Component } from './test-component3660.component';

describe('TestComponent3660Component', () => {
  let component: TestComponent3660Component;
  let fixture: ComponentFixture<TestComponent3660Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3660Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
