import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3797Component } from './test-component3797.component';

describe('TestComponent3797Component', () => {
  let component: TestComponent3797Component;
  let fixture: ComponentFixture<TestComponent3797Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3797Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
