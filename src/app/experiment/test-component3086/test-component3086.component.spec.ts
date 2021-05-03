import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3086Component } from './test-component3086.component';

describe('TestComponent3086Component', () => {
  let component: TestComponent3086Component;
  let fixture: ComponentFixture<TestComponent3086Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3086Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
