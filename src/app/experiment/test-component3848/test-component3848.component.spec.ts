import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3848Component } from './test-component3848.component';

describe('TestComponent3848Component', () => {
  let component: TestComponent3848Component;
  let fixture: ComponentFixture<TestComponent3848Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3848Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
