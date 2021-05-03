import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3168Component } from './test-component3168.component';

describe('TestComponent3168Component', () => {
  let component: TestComponent3168Component;
  let fixture: ComponentFixture<TestComponent3168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3168Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
